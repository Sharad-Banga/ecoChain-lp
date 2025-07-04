import type { Metadata } from "next";
import { Geist, Geist_Mono ,Poppins ,Raleway } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose weights you need
  variable: '--font-poppins',
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
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
