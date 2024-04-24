import { Users } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-cyan-400">
      <div className="container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost">
            <Users color="#dee3e3" />
          </Link>
        </div>
        <div>
          <Link href="/" className="btn btn-ghost text-soft-white">
            Aufträge
          </Link>
        </div>
        <div className="flex-none">
          <Link href="/" className="btn btn-ghost text-soft-white">
            Extra?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
