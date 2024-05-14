import React, { useEffect, useState } from "react";

const UserInfo = ({ data }) => {
  return (
    <div className="justify-center col-span-2 py-8 flex flex-col">
      <div className="mt-2">
        <span className="text-xs">First Name</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">{data.firstname}</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Last Name</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">{data.lastname}</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Age</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">{data.age}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
