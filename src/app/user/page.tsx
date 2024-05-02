import React from "react";

const User = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-3 grid-rows-2 w-screen-50 bg-base-100 shadow-xl rounded-3xl overflow-auto">
        <div className="avatar justify-center items-center">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="card-body items-center text-center col-span-2">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <div className="bg-accent col-span-3"></div>
      </div>
    </div>
  );
};

export default User;
