import Avatar from "@/components/Avatar";
import BioStats from "@/components/BioStats";
import SignOutButton from "@/components/SignOutButton";
import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/auth";

import { getServerSession } from "next-auth";
import Link from "next/link";

const User = async () => {
  // const [isLoading, setIsLoading] = useState(true);

  const session = await getServerSession(authOptions);
  console.log(session);

  // if (isLoading) {
  //   return <div>Is Loading...</div>;
  // }
  if (session?.user) {
    return (
      <div className="container pt-16 px-8">
        <div className="grid grid-cols-3 grid-rows-2 w-screen-50 bg-base-100 overflow-auto px-8 shadow-2xl rounded-3xl">
          <Avatar />
          <UserInfo data={session?.user} />
          <BioStats />
        </div>
        {/* {isLoading ? (
        <div className="grid grid-cols-3 grid-rows-2 w-screen-50 bg-base-100 overflow-auto px-8 shadow-2xl rounded-3xl">
          <div className="justify-center ml-3 flex flex-col pt-8">
            <div className="skeleton w-24 h-24 rounded-full shrink-0"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>
          <div className="justify-center col-span-2 py-8 flex flex-col gap-2">
            <div>
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-8 w-full p-1"></div>
            </div>
            <div>
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-8 w-full p-1"></div>
            </div>
            <div>
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-8 w-full p-1"></div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-32 w-full mt-4"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 grid-rows-2 w-screen-50 bg-base-100 shadow-2xl rounded-3xl overflow-auto px-8">
          {" "}
          
        </div>
      )} */}
        <div className=" text-end">
          <SignOutButton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>sign in to see this</p>
      <Link href="/" className="btn btn-primary hover:btn-secondary">
        Back home{" "}
      </Link>
    </div>
  );
};

export default User;
