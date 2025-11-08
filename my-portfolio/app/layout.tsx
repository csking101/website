import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const ibm = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400','500','600'] });

export const metadata: Metadata = {
  title: 'Chinmaya - Portfolio',
  description: 'Personal website showcasing projects, research, and thoughts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch(e){}
})();`,
          }}
        />
      </head>
      <body className={`${ibm.className} overflow-hidden`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
