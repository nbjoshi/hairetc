import type { Metadata } from 'next';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { ThemeProvider } from '@/components/theme/theme-provider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Hair Etc - Salon & Beauty',
  description: 'Professional salon services and premium hair care products',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
