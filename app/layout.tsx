import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Announcement from "../app/(components)/Announcement";
import Nav from "../app/(components)/Nav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gweiland_nextjs_task",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen overflow-hidden">
          <div className="overflow-auto">
            <Announcement />
            <Nav />
            <div className="flex-grow z-11">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
