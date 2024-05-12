"use client";
import React from "react";

const ModalSignup = () => {
  const useEffect = () => {
    const modal = document.getElementById("my_modal");
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
        Start Helping
      </button>
      <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box overflow-hidden">
          <form className="card-body py-1">
            <div className="form-control">
              <h1 className="text-3xl font-bold">Join the Team!</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="first name"
                className="input input-bordered input-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered input-primary"
                required
              />
            </div>
            <div className="flex">
              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  placeholder="age"
                  className="input input-bordered input-primary w-[50%]"
                  required
                />
              </div>
              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select className="select select-primary w-full max-w-xs">
                  <option disabled selected>
                    gender
                  </option>
                  <option>Man</option>
                  <option>Woman</option>
                  <option>Diverse</option>
                </select>
              </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered input-primary"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary hover:btn-secondary">
                Sign Up
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

export default ModalSignup;
