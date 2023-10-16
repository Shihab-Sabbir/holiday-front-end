import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DropNavbar from "./components/Navbar/DropNavbar";
import ReduxProvider from "@/lib/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#F2F2F2] relative min-h-screen max-w-[100vw] overflow-x-hidden`}
      >
        <ReduxProvider>
          <DropNavbar />
          <div>{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
