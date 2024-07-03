'use client';
import { dateFormater } from '@/libs/dateFormater';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiEyeLine } from 'react-icons/ri';
import { RiFileCopyLine } from 'react-icons/ri';
import { RiCalendarEventLine } from 'react-icons/ri';
import { RiMoreLine } from 'react-icons/ri';
import { useDebounce } from 'use-debounce';
import Pagination from './_paggination';
import Card from '@/app/components/card';

export type LinkType = {
  id: string;
  url: string;
  shortUrl: string;
  visits: number;
  userId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type Meta = {
  totalLinks: number;
  currentPage: number;
  totalPages: number;
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [debounceValue] = useDebounce(search, 1500);
  const [links, setLinks] = useState<LinkType[]>([]);
  const [meta, setMeta] = useState<Meta>({ totalLinks: 1, currentPage: 1, totalPages: 1 });
  // create state for the input date from and to
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handlePageChange = (page: number) => {
    setMeta((prevMeta) => ({ ...prevMeta, currentPage: page }));
  };

  const getLinks = async () => {
    try {
      const q = debounceValue == '' ? (from && to !== '' ? `/api/links?from=${from}&to=${to}` : `/api/links?limit=5&page=${meta.currentPage}`) : `/api/links?search=${debounceValue}`;

      const resp = await fetch(q);
      const data = await resp.json();

      setLinks(data.data);
      if (data.meta) {
        setMeta(data.meta);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, [debounceValue, meta.currentPage, from, to]);

  return (
    <div className="flex-1 h-full p-10 min-h-screen">
      <h1 className="text-2xl font-bold mb-11">Kelola Tautan</h1>
      <form className="max-w-lg">
        <div>
          <input type="text" id="caritautan" name="caritautan" value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 border border-[#385A64] rounded-md w-full shadow-2xl" placeholder="Cari Tautan" />
        </div>
        <div className="flex items-center justify-between pt-4 space-x-2">
          <input type="date" id="from" name="from" value={from} onChange={(e) => setFrom(e.target.value)} className="p-2 border border-[#385A64] rounded-md w-full shadow-2xl" />
          <input type="date" id="to" name="to" value={to} onChange={(e) => setTo(e.target.value)} className="p-2 border border-[#385A64] rounded-md w-full shadow-2xl" />
          <button
            type="button"
            onClick={() => {
              setFrom('');
              setTo('');
            }}
            className="bg-[#FF735C] text-white px-4 py-2 rounded-md"
          >
            Reset
          </button>
        </div>
      </form>

      <div className="py-4">
        <p className="font-semibold pt-4">Aktivitas Terakhir</p>

        {links && links.map((link) => <Card key={link.id} link={link} />)}
        <Pagination meta={meta} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
