"use client";
import React from "react";

const SignUpButton = () => {
  const showModal = () => {
    const modal = document.getElementById("my_modal");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };
  return (
    <div>
      <button
        className="btn border-none bg-primary hover:bg-secondary"
        onClick={showModal}
      >
        Start Helping
      </button>
    </div>
  );
};

export default SignUpButton;
