import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

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
    <html lang="en">
      <body
        className="min-h-screen text-center bg-white text-black"
      >
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
          <footer className="border-t py-8">
            <div className="mx-auto max-w-5xl px-4 text-sm  text-gray-600">
              © {new Date().getFullYear()} Jeffery Achamfuor
            </div>
          </footer>
      </body>
    </html>
  );
}
