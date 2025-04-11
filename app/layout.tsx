import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ariel Spencer - Full Stack Developer',
  description: 'Personal website showcasing projects, tools, mini-games, and blog articles about web development and design.',
  keywords: 'web development, javascript, typescript, next.js, react, mongodb, tools',
  authors: [{ name: 'Ariel Spencer' }],
  creator: 'Ariel Spencer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arielspencer.com.br',
    siteName: 'Ariel Spencer',
    title: 'Ariel Spencer - Full Stack Developer',
    description: 'Personal website showcasing projects, tools, mini-games, and blog articles',
    images: [
      {
        url: '/assets/logo-ariel-spencer.png',
        width: 1200,
        height: 630,
        alt: 'Spencer - Developer & Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ariel Spencer - Full Stack Developer',
    description: 'Personal website showcasing projects, tools, mini-games, and blog articles',
    images: ['/assets/logo-ariel-spencer.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}