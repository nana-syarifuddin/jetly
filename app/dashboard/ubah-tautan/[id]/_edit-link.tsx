'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const EditLink = ({ linkId }: { linkId: string }) => {
  const [url, setUrl] = useState({
    fullUrl: '',
    shortUrl: '',
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await fetch(`/api/links/${linkId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url.fullUrl,
          shortUrl: url.shortUrl,
        }),
      });
      if (!resp.ok) {
        const data = await resp.json();
        throw new Error(data.message ?? 'Gagal membuat tautan pendek');
      }

      toast.success('Tautan berhasil diubah!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } catch (error: any) {
      toast.error(error.message ?? 'Terjadi kesalahan', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const getLink = async (id: string) => {
    try {
      const resp = await fetch(`/api/links/${id}`);
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.message);

      setUrl({
        fullUrl: data.data.url,
        shortUrl: data.data.shortUrl,
      });
    } catch (error: any) {
      console.error(error);
      toast.error(error.message ?? 'Terjadi kesalahan', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const handleDelete = async (id: string) => {
    const status = confirm('Yakin ingin menghapus link ini?');
    
    if (!status) return;

    try {
      const resp = await fetch(`/api/links/${id}`, {
        method: 'DELETE',
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.message);

      toast.success('Tautan berhasil dihapus!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      router.push('/dashboard/kelola-tautan');
    } catch (error: any) {
      console.error(error);
      toast.error(error.message ?? 'Terjadi kesalahan', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    getLink(linkId);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div>
        <input
          type="text"
          id="tautanpanjang"
          name="tautanpanjang"
          value={url.fullUrl}
          onChange={(e) => setUrl({ fullUrl: e.target.value, shortUrl: url.shortUrl })}
          className="p-2 border border-[#385A64] rounded-md w-full shadow-2xl"
          placeholder="Masukkan Tautan Panjangmu"
        />
      </div>
      <div className="flex items-center justify-between w-full overflow-hidden bg-[#385A64] rounded-md mt-8 shadow-2xl">
        <label className="mr-3 pl-4 text-white">jetly.vercel.app/</label>
        <input
          type="text"
          id="tautanpendek"
          name="tautanpendek"
          value={url.shortUrl}
          onChange={(e) => setUrl({ fullUrl: url.fullUrl, shortUrl: e.target.value })}
          className="p-2 border border-[#385A64] rounded-r-md w-full"
          placeholder="Masukkan Tautan Pendekmu"
        />
      </div>
      <div className="mt-8 flex gap-8">
        <button type="submit" className="bg-[#FF735C] text-white px-4 py-2 rounded-md shadow-2xl">
          Edit Tautan
        </button>
        <button type="button" onClick={() => handleDelete(linkId)} className="bg-red-700 text-white px-4 py-2 rounded-md shadow-2xl">
          Hapus Tautan
        </button>
      </div>
    </form>
  );
};

export default EditLink;
