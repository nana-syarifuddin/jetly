import { getServerAuthSession } from '@/libs/auth';
import prisma from '@/libs/prisma';
import { NextRequest } from 'next/server';

export const PUT = async (req: NextRequest) => {
  try {
    const { username, email } = await req.json();
    const session = await getServerAuthSession();

    if (!session) {
      return Response.json(
        {
          success: false,
          message: 'Unauthorized',
        },
        { status: 401 }
      );
    }

    const userUpdate = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        username,
        email,
      },
    });

    return Response.json({
      success: true,
      data: userUpdate,
    });
  } catch (error: any) {
    console.log(error);
    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};
