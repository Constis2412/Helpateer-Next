"use client";
import React from "react";

const ModalLogin = () => {
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
        className="btn  border-none bg-primary hover:bg-secondary"
        onClick={useEffect}
      >
        Already Helping
      </button>
      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="card-body pt-4">
            <div className="form-control">
              <h1 className="text-3xl font-bold">
                Enter your Team information!
              </h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered input-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered input-primary"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hove">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary hover:btn-secondary">
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

export default ModalLogin;
