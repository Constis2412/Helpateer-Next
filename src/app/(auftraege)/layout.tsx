import SideBar from "@/components/SideBar";

export default function auftraegeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
}
