"use client";
import React from "react";
import Login from "./Login";

const Modal = () => {
  const useEffect = () => {
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
        className="btn hover:bg-cyan-700 bg-cyan-400 text-soft-white border-none"
        onClick={useEffect}
      >
        Get Started
      </button>
      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <Login />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
