import { PenLine } from "lucide-react";
import Link from "next/link";
import React from "react";

const Avatar = () => {
  return (
    <div className="avatar justify-center ml-3 flex flex-col pt-8">
      <div className="w-24 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>

      <Link href="/">
        <div className="flex">
          <PenLine />
          <span>change</span>
        </div>
      </Link>
    </div>
  );
};

export default Avatar;
