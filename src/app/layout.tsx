import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/header/header';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export const metadata: Metadata = {
  title: "Dosłownie neurologopedia",
  description: "Centrum terapii neurologopedycznej Dosłownie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Header/>
        {children}        
      </body>
    </html>
  );
}
