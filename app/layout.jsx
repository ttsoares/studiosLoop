import "./globals.css";

import { Josefin_Sans, Alata } from "next/font/google";

const josefine = Josefin_Sans({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-josefine",
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
});

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Loopstudios",
  description: "FrontEndMentor: Loopstudios landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefine.variable} ${alata.variable} w-screen h-dvh`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
