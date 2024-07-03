'use client';
import { SessionProvider } from 'next-auth/react';
import Sidebar from '../components/sidebar';

export default function MainLaypput({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <div className="flex h-full bg-[url('/bg2.png')]">
        <Sidebar />
        {children}
      </div>
    </SessionProvider>
  );
}
