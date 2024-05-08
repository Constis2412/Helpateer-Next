"use client";
import Avatar from "@/components/Avatar";
import BioStats from "@/components/BioStats";
import UserInfo from "@/components/UserInfo";
import { FC, useEffect, useState } from "react";

interface UserProps {
  params: {
    id: string;
  };
}

const User: React.FC<UserProps> = ({ params }) => {
  const [text, setText] = useState({ firstName: "", lastName: "", age: 0 });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${params.id}/?delay=1000`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setText({
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
        });
        setIsLoading(false);
      });
  }, [params.id]);

  // if (isLoading) {
  //   return <div>Is Loading...</div>;
  // }

  return (
    <div className="container pt-16 px-8">
      {isLoading ? (
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
          <Avatar />
          <UserInfo text={text} />
          <BioStats />
        </div>
      )}
    </div>
  );
};

export default User;
