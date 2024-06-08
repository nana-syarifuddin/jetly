'use client';
import React, { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const CreateLink = () => {
  const [fullUrl, setFullUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await fetch('/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: fullUrl,
          shortUrl,
        }),
      });
      if (!resp.ok) {
        const data = await resp.json();
        throw new Error(data.message ?? 'Gagal membuat tautan pendek');
      }

      toast.success('Tautan berhasil dibuat!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      //   revalidatePath('/dashboard', 'page');

      setFullUrl('');
      setShortUrl('');
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

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div>
        <input
          type="text"
          id="tautanpanjang"
          name="tautanpanjang"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
          className="p-2 border border-[#385A64] rounded-md w-full shadow-2xl"
          placeholder="Masukkan Tautan Panjangmu"
        />
      </div>
      <div className="flex items-center justify-between w-full overflow-hidden bg-[#385A64] rounded-md mt-8 shadow-2xl">
        <label className="mr-3 pl-4 text-white">jetly.vercel.app/</label>
        <input type="text" id="tautanpendek" name="tautanpendek" value={shortUrl} onChange={(e) => setShortUrl(e.target.value)} className="p-2 border border-[#385A64] rounded-r-md w-full" placeholder="Masukkan Tautan Pendekmu" />
      </div>
      <div className="mt-8">
        <button type="submit" className="bg-[#FF735C] text-white px-4 py-2 rounded-md shadow-2xl">
          Pendekan Tautan
        </button>
      </div>
    </form>
  );
};

export default CreateLink;
