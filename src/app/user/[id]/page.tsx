import Avatar from "@/components/Avatar";
import BioStats from "@/components/BioStats";
import UserInfo from "@/components/UserInfo";
import { PenLine } from "lucide-react";
import Link from "next/link";

const User = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container pt-16 px-8">
      <div className="grid grid-cols-3 grid-rows-2 w-screen-50 bg-base-100 shadow-2xl rounded-3xl overflow-auto px-8">
        <Avatar />
        <UserInfo params={params} />
        <BioStats />
      </div>
    </div>
  );
};

export default User;
