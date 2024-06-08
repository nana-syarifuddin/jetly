import { getServerAuthSession } from '@/libs/auth';
import prisma from '@/libs/prisma';

export const GET = async (req: Request, context: { params: { id: string } }) => {
  try {
    const id = context.params.id;

    const session = await getServerAuthSession();

    if (!session) {
      throw new Error('Unauthorized');
    }

    // check if link exists
    const existingLink = await prisma.link.findUnique({
      where: {
        id,
        AND: {
          userId: session.user.id,
        },
      },
    });

    if (!existingLink) {
      return Response.json(
        {
          success: false,
          message: 'Link not found',
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(
      {
        success: true,
        data: existingLink,
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
export const PUT = async (req: Request, context: { params: { id: string } }) => {
  try {
    const id = context.params.id;
    const { url, shortUrl } = await req.json();

    const session = await getServerAuthSession();

    if (!session) {
      throw new Error('Unauthorized');
    }

    // check if link exists
    const existingLink = await prisma.link.findUnique({
      where: {
        id,
        AND: {
          userId: session.user.id,
        },
      },
    });

    const isExistShortUrl = await prisma.link.count({
      where: {
        shortUrl,
      },
    });

    if (!existingLink) {
      return Response.json(
        {
          success: false,
          message: 'Link not found',
        },
        {
          status: 404,
        }
      );
    }

    if (isExistShortUrl != 0 && existingLink.shortUrl != shortUrl) {
      throw new Error('Link pendek sudah dipakai');
    }
    let updatedLink;
    if (existingLink.shortUrl == shortUrl) {
      updatedLink = await prisma.link.update({
        where: {
          id,
        },
        data: {
          url,
        },
      });
    } else {
      updatedLink = await prisma.link.update({
        where: {
          id,
        },
        data: {
          url,
          shortUrl,
        },
      });
    }

    // update link

    return Response.json(
      {
        success: true,
        data: updatedLink,
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

export const DELETE = async (req: Request, context: { params: { id: string } }) => {
  try {
    const id = context.params.id;

    const session = await getServerAuthSession();

    if (!session) {
      throw new Error('Unauthorized');
    }

    // check if link exists
    const existingLink = await prisma.link.findUnique({
      where: {
        id,
        AND: {
          userId: session.user.id,
        },
      },
    });

    if (!existingLink) {
      return Response.json(
        {
          success: false,
          message: 'Link not found',
        },
        {
          status: 404,
        }
      );
    }

    // delete link
    await prisma.link.delete({
      where: {
        id,
      },
    });

    return Response.json(
      {
        success: true,
        message: 'Link deleted',
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
