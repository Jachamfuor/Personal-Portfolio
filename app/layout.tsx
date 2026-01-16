import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Jeffery Achamfuor | Portfolio",
  description: "Computer Science student portfolio and blog",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-center ">

        <Providers>
        <Navbar />
        <main className="w-full">{children}</main>
          <footer className="border-t border-black/10 dark:border-white/15 py-8">
            <div className="mx-auto max-w-5xl px-4 text-sm">
              © {new Date().getFullYear()} Jeffery Achamfuor. All rights reserved.
            </div>
          </footer>
          </Providers>
      </body>
    </html>
  );
}
