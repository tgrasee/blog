import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "@/app/ui/styles/globals.css";
import Header from "@/app/ui/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {/* <header className="bg-blue-600 text-white py-4"> */}
          {/* <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold"><Link href="/">My Blog Site</Link></h1> */}
            {/* <NavLinks /> */}
            {/* <nav>
              <Link href="/blog/about" className="text-white px-3 py-2 rounded hover:bg-blue-700">About</Link>
              <Link href="/blog/posts" className="text-white px-3 py-2 rounded hover:bg-blue-700">Posts</Link>
              <Link href="/blog/contact" className="text-white px-3 py-2 rounded hover:bg-blue-700">Contact</Link>
            </nav> */}
          {/* </div> */}
        {/* </header> */}
        {children}
      </body>
    </html>
  );
}
