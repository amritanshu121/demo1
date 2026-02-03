import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebMakers  - Modern Web Development Services',
  description: 'Professional web development services for startups and small businesses. We build fast, modern, and scalable websites tailored to your needs.',
  keywords: ['web development', 'website design', 'static websites', 'dynamic websites', 'portfolio websites', 'small business websites'],
  openGraph: {
    title: 'WebMakers - Modern Web Development Services',
    description: 'Professional web development services for startups and small businesses.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebMakers - Modern Web Development Services',
    description: 'Professional web development services for startups and small businesses.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
