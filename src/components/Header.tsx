import { url } from "inspector";
import React, { useEffect } from "react";
import Modal from "./Modal";

const Header = () => {
  return (
    <div
      className="hero h-[40%] bg-base-200"
      style={{ backgroundImage: "url(bled-2582655_1920.jpg)" }}
    >
      <div className="hero-content text-center text-soft-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Header;
