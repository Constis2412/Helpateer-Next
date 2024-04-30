import React, { useEffect } from "react";
import Modal from "./Modal";

const Header = () => {
  return (
    <div
      className="hero h-[40%] bg-base-200"
      style={{ backgroundImage: "url(bled-2582655_1920.jpg)" }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Helpateer</h1>
          <p className="py-6">
            We are a team of people that want to motivate folks to help elderly.
            Join Up on our mission to better the World!
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Header;
