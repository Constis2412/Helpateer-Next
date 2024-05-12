"use client";
import React, { useState } from "react";

const ModalSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
      newErrors.firstName = "First name should only contain letters.";
    }
    if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
      newErrors.lastName = "Last name should only contain letters.";
    }
    if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = "Age must be a valid number.";
    }
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email format.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const { confirmPassword, ...dataToSend } = formData;

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (res.ok) {
      setMessage("Registration successful!");
      setIsSuccess(true);
    } else {
      const errorData = await res.json();
      setMessage(`Registration failed: ${errorData.error}`);
      setIsSuccess(false);
    }
  };

  return (
    <div>
      <button
        className="btn border-none bg-primary hover:bg-secondary"
        onClick={() => {
          const modal = document.getElementById("my_modal");
          if (modal instanceof HTMLDialogElement) {
            modal.showModal();
          } else {
            console.error(
              "The element #my_modal does not exist or is not a dialog element."
            );
          }
        }}
      >
        Start Helping
      </button>
      <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box overflow-hidden">
          <form className="card-body py-1" onSubmit={handleSubmit}>
            <div className="form-control">
              <h1 className="text-3xl font-bold">Join the Team!</h1>
            </div>
            {message && (
              <div
                className={`alert ${
                  isSuccess ? "alert-success" : "alert-error"
                }`}
              >
                {message}
              </div>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered input-primary"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered input-primary"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>
            <div className="flex">
              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="input input-bordered input-primary w-[50%]"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                {errors.age && <p className="text-red-500">{errors.age}</p>}
              </div>
              <div className="form-control w-[50%]">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select
                  name="gender"
                  className="select select-primary w-full max-w-xs"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option disabled value="">
                    Gender
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
                name="email"
                placeholder="Email"
                className="input input-bordered input-primary"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered input-primary"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered input-primary"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary hover:btn-secondary"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalSignup;

/*
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
*/
