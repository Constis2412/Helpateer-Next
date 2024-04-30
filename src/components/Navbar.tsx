"use client";
import { Users } from "lucide-react";
import Link from "next/link";
import DarkLightMode from "./DarkLightMode";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost">
            <Users color="#dee3e3" />
          </Link>
        </div>
        <DarkLightMode />
        <div>
          <Link href="/auftraege" className="btn btn-ghost">
            Aufträge
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/" className="btn btn-ghost">
            Extra?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
