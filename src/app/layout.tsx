import './globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Reese.dev',
    template: 'Reese.dev | %s',
  },
  description: "FrontEnd Engineer Reese's blog",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <Header />
        <section className="flex flex-col flex-nowrap pt-24 w-full min-h-screen items-center justify-between bg-white  dark:bg-sky-950 dark:text-white">
          <main className="flex flex-col flex-nowrap w-full max-w-screen-md items-center z-10 px-5">
            {children}
          </main>
        </section>
        <Footer />
      </body>
    </html>
  );
}
