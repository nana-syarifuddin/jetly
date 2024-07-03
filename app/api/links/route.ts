import { getServerAuthSession } from '@/libs/auth';
import prisma from '@/libs/prisma';
import { Link } from '@prisma/client';
import { NextRequest } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const { url, shortUrl } = await req.json();

    //  check if the shortUrl already exists
    const existingLink = await prisma.link.findUnique({
      where: {
        shortUrl,
      },
    });

    if (existingLink) {
      throw new Error('Link pendek sudah dipakai');
    }

    // get current user
    const session = await getServerAuthSession();

    if (!session) {
      throw new Error('Unauthorized');
    }

    // create new link
    const newLink = await prisma.link.create({
      data: {
        url,
        shortUrl,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return Response.json(
      {
        success: true,
        data: newLink,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = async (req: NextRequest) => {
  try {
    // get current user
    const session = await getServerAuthSession();

    if (!session) {
      throw new Error('Unauthorized');
    }

    /*
      TODO: Add paggination and search by date
    */

    const searchParams = req.nextUrl.searchParams;
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    // paggination
    const page = searchParams.get('page');

    let links: Link[] = [];

    if (search) {
      links = await prisma.link.findMany({
        where: {
          userId: session.user.id,
          AND: {
            url: {
              contains: search,
              mode: 'insensitive',
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } else if (page && limit) {
      links = await prisma.link.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: (parseInt(page) - 1) * parseInt(limit),
        take: parseInt(limit),
      });

      const totalLinks = await prisma.link.count({
        where: {
          userId: session.user.id,
        },
      });

      const totalPages = Math.ceil(totalLinks / parseInt(limit));

      return Response.json(
        {
          success: true,
          data: links,
          meta: {
            totalLinks,
            currentPage: parseInt(page),
            totalPages: totalPages,
          },
        },
        {
          status: 200,
        }
      );
    } else if (limit) {
      links = await prisma.link.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: parseInt(limit),
      });
    } else if (from && to) {
      links = await prisma.link.findMany({
        where: {
          userId: session.user.id,
          createdAt: {
            gte: new Date(from),
            lte: new Date(to),
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } else {
      // get all links by user
      links = await prisma.link.findMany({
        where: {
          userId: session.user.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    }

    return Response.json(
      {
        success: true,
        data: links,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
