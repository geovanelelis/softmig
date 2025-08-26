import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softmig",
  description: "Softmig Software e Telecomunicações",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
