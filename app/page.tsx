"use client"
import Navbar from "@/components/Navbar";
import { MobileNews } from "@/components/NewsComp";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter()
  router.push("/apps")

  return (
    <main className="flex flex-row w-full h-[100vh] bg-gray-800 text-white text-2xl">

    </main>
  );
}
