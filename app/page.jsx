import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Page() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="bg-red-800 py-20">
        <Header />
      </div>
      <div className="flex h-full">
        <div className="w-1/4   bg-white">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
