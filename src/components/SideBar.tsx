"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  ListChecks,
  MapPin,
  List,
  CalendarDays,
  CircleHelp,
  Plus,
} from "lucide-react";

const links = [
  { href: "/auftraege", icon: <Plus />, label: "Auftrag erstellen" },
  { href: "/map", icon: <MapPin />, label: "Karte" },
  { href: "/Jobs", icon: <List />, label: "verfügbare Jobs" },
  { href: "/doneJobs", icon: <ListChecks />, label: "abgeschlossene Jobs" },
  { href: "/HelpCenter", icon: <CircleHelp />, label: "Hilfecenter" },
  { href: "/calendar", icon: <CalendarDays />, label: "Kalender" },
];

const NavLink = ({ href, icon, label, active }) => (
  <Link
    href={href}
    className={`btn ${
      active ? "bg-primary hover:bg-accent" : "hover:bg-primary"
    }`}
  >
    {icon}
    {label}
  </Link>
);

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-primary">
      <div className="flex flex-col p-4 gap-2">
        {links.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            icon={link.icon}
            label={link.label}
            active={pathname === link.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
