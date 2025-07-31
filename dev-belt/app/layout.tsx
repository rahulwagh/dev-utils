// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/sidebar';
import { ThemeProvider } from '@/components/theme-provider'; // Import ThemeProvider
import { ThemeToggle } from '@/components/theme-toggle'; // Import ThemeToggle

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev-Belt',
  description: 'All-in-one developer utility toolbox',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider // Wrap everything with the ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto">
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}