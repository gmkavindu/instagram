import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Feed from "@/components/Feed";
import Modal from "@/components/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0 </title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />

      {/* Modal */}
      <Modal />

      
    </div>
  );
}
