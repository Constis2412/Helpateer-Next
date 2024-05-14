"use client";
import React from "react";

const LoginButton = () => {
  const showModal = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error(
        "The element #my_modal_2 does not exist or is not a dialog element."
      );
    }
  };
  return (
    <div>
      <button
        className="btn  border-none bg-primary hover:bg-secondary"
        onClick={showModal}
      >
        Already Helping
      </button>
    </div>
  );
};

export default LoginButton;
