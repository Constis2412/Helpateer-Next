import { Users } from "lucide-react";
import Link from "next/link";
import DarkLightMode from "./DarkLightMode";

const Navbar = () => {
  return (
    <div className="navbar bg-primary sticky top-0 z-50">
      <div className="container gap-2">
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
          <Link href="/user/1" className="">
            <div className="avatar w-12 h-12">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
