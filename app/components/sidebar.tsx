'use client';
import React, { useState } from 'react';
import { RiHomeLine, RiFunctionAddLine, RiFunctionLine, RiLogoutBoxLine } from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col w-60 bg-inherit border-r">
      <div className="h-28 flex items-center justify-center">
        <Image src={'/jetly.png'} width={500} height={141} alt="logo" className="w-48 h-auto" />
      </div>

      <Link href={'/dashboard/profil'} className={currentPath === '/dashboard/profil' ? 'hover:text-[#FF735C] font-semibold' : 'hover:text-[#FF735C]'}>
        <div className="flex items-center px-8 py-2">
          <Image src={'/profil.png'} width={32} height={32} alt="profil" className="w-8 h-8 rounded-full mr-2" />
          <span className="">Profil</span>
        </div>
      </Link>

      <ul className="py-4">
        <Link href={'/dashboard'} className={currentPath === '/dashboard' ? 'text-[#FF735C] hover:text-[#FF735C] font-semibold' : 'hover:text-[#FF735C]'}>
          <li className="px-8 py-3 flex items-center">
            <RiHomeLine className="mr-4" size={20} />
            <span>Dashboard</span>
          </li>
        </Link>
        <Link href={'/dashboard/buat-tautan'} className={currentPath === '/dashboard/buat-tautan' ? 'text-[#FF735C] hover:text-[#FF735C] font-semibold' : 'hover:text-[#FF735C]'}>
          <li className="px-8 py-3 flex items-center">
            <RiFunctionAddLine className="mr-4" size={20} />
            <span>Buat Tautan</span>
          </li>
        </Link>
        <Link href={'/dashboard/kelola-tautan'} className={currentPath === '/dashboard/kelola-tautan' ? 'text-[#FF735C] hover:text-[#FF735C] font-semibold' : 'hover:text-[#FF735C]'}>
          <li className="px-8 py-3 flex items-center">
            <RiFunctionLine className="mr-4" size={20} />
            <span>Kelola Tautan</span>
          </li>
        </Link>
        <Link href={'/'} className={currentPath === '/' ? 'hover:text-[#FF735C] font-semibold' : 'hover:text-[#FF735C]'}>
          <li
            className="px-8 py-3 flex items-center"
            onClick={() =>
              signOut({
                callbackUrl: '/',
              })
            }
          >
            <RiLogoutBoxLine className="mr-4" size={20} />
            <span>Logout</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
