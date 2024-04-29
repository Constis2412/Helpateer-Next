"use client";
import React from "react";

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
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form className="card-body pt-4">
            <div className="form-control">
              <h1 className="text-3xl font-bold">Join our Team!</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-soft-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-soft-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-soft-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-400 text-soft-white hover:bg-cyan-700">
                Login
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
