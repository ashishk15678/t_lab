import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Switcher from "@/components/Swticher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tron-Lab",
  description: "Tron Lab is an open blog based community which provides blogs on various topics including AI , tech and research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-row">
      <Switcher />
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
}
