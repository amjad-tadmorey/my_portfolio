import React from 'react';
import Head from 'next/head';
import Menu from '@/components/partials/Menu';
import Footer from '@/components/partials/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FiArrowUp } from 'react-icons/fi';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children, title }) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Amjad';
  const pageTitle = title ? `${title} - ${appName}` : appName;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        {/* 👇 Open Graph / Social Preview Tags 👇 */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Check out my MERN Stack projects, experience, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://my-portfolio-zeta-one-80.vercel.app/" />
        <meta property="og:image" content="https://via.placeholder.com/1x1.png" />

        {/* 👇 Optional Twitter tags (تجاهلها لو ما بدك) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="Check out my MERN Stack projects, experience, and more." />
        <meta name="twitter:image" content="https://via.placeholder.com/1x1.png" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop
          smooth
          className="fixed bottom-16 right-8 z-10 cursor-pointer rounded-lg bg-primary-500 p-3 text-white transition-colors duration-150 hover:bg-primary-600 "
          component={
            <div className="flex justify-center">
              <FiArrowUp />
            </div>
          }
        />
        <Menu />
        <div className="mt-16">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
