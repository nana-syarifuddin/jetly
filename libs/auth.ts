import { AuthOptions, DefaultSession, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from './prisma';
import { User } from '@prisma/client';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User;
  }
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/masuk',
    error: '/masuk',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      id: 'custom-provider',
      name: 'Custom Provider',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ): Promise<any> {
        if (!credentials) throw new Error('Credentials not provided');
        const user = await prisma.user.findFirst({
          where: { email: credentials.email },
        });
        if (!user) throw new Error('user not found');
        if (user.isGoogle) throw new Error('use google to login');
        if (!user.password) throw new Error('email or password is incorrect');
        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isMatch) throw new Error('email or password is incorrect');
        return user;
      },
    }),
  ],
  callbacks: {
    session: async ({ session }) => {
      if (!session.user?.email) throw new Error('Failed to load user');
      const userDetail = await prisma.user.findFirst({
        where: { email: session.user.email },
      });

      if (!userDetail) {
        throw new Error('user not found');
      }

      session.user = userDetail;

      return session;
    },
    signIn: async ({ user, account, profile }) => {
      //  check if the user is google user

      if (account?.provider === 'google') {
        await prisma.user.upsert({
          where: { email: user.email! },
          update: {
            isGoogle: true,
          },
          create: {
            // @ts-ignore
            username: user.name,
            email: user.email!,
            isGoogle: true,
          },
        });

        return true;
      }
      return true;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
