import { Montserrat } from 'next/font/google';
import '../globals.css';
import MainLaypput from './main';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jetly',
  description: 'Pemendek Tautan',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MainLaypput>
          {children}
          <ToastContainer />
        </MainLaypput>
      </body>
    </html>
  );
}
