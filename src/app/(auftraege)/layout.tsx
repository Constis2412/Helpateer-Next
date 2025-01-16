"use client";

import { SessionProvider } from "next-auth/react";

import SideBar from "@/components/SideBar";

export default function auftraegeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-3 gap-4 h-screen">
      <SessionProvider>
        <SideBar />
        {children}
      </SessionProvider>
    </div>
  );
}
