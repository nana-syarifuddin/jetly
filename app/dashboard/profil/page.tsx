'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';

export default function Home() {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    isGoogle: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { data: session, status } = useSession();
  const getProfile = () => {
    if (status === 'authenticated') {
      setProfile({
        username: session.user.username || '',
        email: session.user.email,
        isGoogle: session.user.isGoogle,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const resp = await fetch('/api/profile', {
        method: 'PUT',
        body: JSON.stringify(profile),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.message);
      alert('Berhasil ubah profil!');
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, [status]);

  return (
    <div className="flex-1 h-screen p-10">
      <h1 className="text-2xl font-bold mb-11">Profil</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="flex items-center pb-8">
          <Image src={'/profil.png'} width={500} height={500} alt="profil" className="w-24 h-24 rounded-full mr-2" />
        </div>

        <div>
          <input
            type="text"
            id="nama"
            name="nama"
            className="p-2 border border-[#385A64] rounded-md w-full shadow-2xl"
            value={profile.username}
            onChange={(e) =>
              setProfile({
                username: e.target.value,
                email: profile.email,
                isGoogle: profile.isGoogle,
              })
            }
          />
        </div>
        <div className="flex items-center justify-between w-full overflow-hidden bg-[#385A64] rounded-md mt-8 shadow-2xl">
          <input
            disabled={profile.isGoogle}
            type="text"
            id="email"
            name="email"
            className="p-2 border border-[#385A64] rounded-md w-full"
            value={profile.email}
            onChange={(e) =>
              setProfile({
                username: profile.username,
                email: e.target.value,
                isGoogle: profile.isGoogle,
              })
            }
          />
        </div>
        <div className="mt-8">
          <button type="submit" className="bg-[#FF735C] text-white px-4 py-2 rounded-md shadow-2xl">
            {isLoading ? 'Loading...' : 'Ubah'}
          </button>
        </div>
      </form>
    </div>
  );
}
