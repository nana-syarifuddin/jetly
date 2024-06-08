'use client';
import { getServerAuthSession } from '@/libs/auth';
import { dateFormater } from '@/libs/dateFormater';
import prisma from '@/libs/prisma';
import { Link } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RiEyeLine, RiFileCopyLine, RiCalendarEventLine, RiMoreLine } from 'react-icons/ri';
import Card from '../components/card';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [links, setLinks] = useState<Link[]>([]);

  const getLinks = async () => {
    try {
      const resp = await fetch(`/api/links?limit=3`);
      const data = await resp.json();

      if (!resp.ok) throw new Error(data.message);

      setLinks(data.data);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="flex-1 p-10 min-h-screen">
      <h1 className="text-2xl font-bold mb-11">Dashboard</h1>

      <div className="p-4 rounded-[10px] bg-[#385A64] text-white shadow-2xl">
        <p className="text-xl">Halo, {session?.user.username} 👋</p>
      </div>

      <div className="py-4">
        <p className="font-semibold pt-4">Aktivitas Terakhir</p>
        {links && links.map((link) => <Card key={link.id} link={link} />)}
      </div>
    </div>
  );
}
