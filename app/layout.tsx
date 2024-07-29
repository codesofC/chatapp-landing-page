import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProviderTheme from "@/context/theme/ThemeProvider";
import { cn } from "@/lib/utils";

const lato = Lato({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Snaptalk - chat app",
  description: "Realtime chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(lato.className)} suppressHydrationWarning>
        <ProviderTheme>
          <Navbar />
          {children}
          <Footer />
        </ProviderTheme>
      </body>
    </html>
  );
}
