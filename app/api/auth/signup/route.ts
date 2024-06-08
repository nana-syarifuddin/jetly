import prisma from '@/libs/prisma';
import bcrypt from 'bcrypt';

export const POST = async (req: Request) => {
  try {
    const { username, email, password } = await req.json();

    // Check if the user already exists
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return Response.json(
        {
          success: false,
          message: 'User already exists',
        },
        { status: 400 }
      );
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    return Response.json(
      {
        success: true,
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: 'Something went wrong',
      },
      { status: 500 }
    );
  }
};

export const GET = async (req: Request) => {
  return Response.json({
    ...req,
  });
};
