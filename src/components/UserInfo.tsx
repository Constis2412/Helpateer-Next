import React, { useEffect, useState } from "react";

type Inhalt = {
  firstName: string;
  lastName: string;
  age: number;
};

const UserInfo = ({ text }: { text: Inhalt }) => {
  return (
    <div className="justify-center col-span-2 py-8 flex flex-col">
      <div className="mt-2">
        <span className="text-xs">First Name</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">{text.firstName}</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Last Name</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">{text.lastName}</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Age</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">{text.age}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
