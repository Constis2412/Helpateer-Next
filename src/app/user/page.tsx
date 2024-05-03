import { PenLine } from "lucide-react";
import Link from "next/link";

const User = () => {
  return (
    <div className="container">
      <div
        id="shadow"
        className="grid grid-cols-3 grid-rows-2 w-screen-50 bg-base-100 shadow-2xl rounded-3xl overflow-auto my-4 px-8"
      >
        <div className="avatar justify-center items-center flex flex-col pt-8">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>

          <Link href="/">
            <div className="flex">
              <PenLine />
              <span>change</span>
            </div>
          </Link>
        </div>
        <div className="items-center text-center col-span-2 py-8">
          <h2 className="">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <div className="bg-base-100 col-span-3 flex flex-col mt-4">
          <span>Tell us about you</span>
          <textarea
            className="textarea textarea-primary"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default User;
