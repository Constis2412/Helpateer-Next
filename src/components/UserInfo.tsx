import React from "react";

const UserInfo = ({ params }: { params: { id: string } }) => {
  return (
    <div className="justify-center col-span-2 py-8 flex flex-col">
      <div className="mt-2">
        <span className="text-xs">First Name</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">{params.id}</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Last Name</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">Mauer</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-xs">Age</span>
        <div className="p-1 rounded-lg border border-primary">
          <span className="pl-4">20</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
