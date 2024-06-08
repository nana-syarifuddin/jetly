import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { getServerAuthSession } from '@/libs/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jetly',
  description: 'Pemendek Tautan',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="bg-[url('/bg2.png')]">
          <Navbar session={session} />
          {children}
          <ToastContainer />
          <Footer />
        </div>
      </body>
    </html>
  );
}
