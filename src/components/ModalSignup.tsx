"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

const FormSchema = z
  .object({
    firstname: z.string().min(1, "firstname is required").max(20),
    lastname: z.string().min(1, "lastname is required").max(20),
    age: z.number().min(1, "age is required").max(100),
    gender: z.string().min(1, "gender is required").max(20),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have more than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const ModalSignup = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      age: 0,
      gender: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const showModal = () => {
    const modal = document.getElementById("my_modal");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  const onSubmit = async (values) => {
    console.log("Form submitted:", values);
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: values.firstname,
        lastname: values.lastname,
        age: values.age,
        gender: values.gender,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      router.push("/");
    } else {
      console.error("Registration failed");
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

      <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="card-body py-1"
          >
            <div className="form-control">
              <h1 className="text-3xl font-bold">Join the Team!</h1>
            </div>

            <div className="form-control">
              <label className="label">First Name</label>
              <input
                placeholder="first name"
                className="input input-bordered input-primary"
                {...form.register("firstname")}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Last Name</label>
              <input
                placeholder="last name"
                className="input input-bordered input-primary"
                {...form.register("lastname")}
                required
              />
            </div>

            <div className="flex">
              <div className="form-control w-[50%]">
                <label className="label">Age</label>
                <input
                  type="number"
                  placeholder="age"
                  className="input input-bordered input-primary"
                  {...form.register("age", { valueAsNumber: true })}
                  required
                />
              </div>
              <div className="form-control w-[50%]">
                <label className="label">Gender</label>
                <select
                  className="select select-primary w-full max-w-xs"
                  {...form.register("gender")}
                  required
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Man">Man</option>
                  <option value="Woman">Woman</option>
                  <option value="Diverse">Diverse</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">Email</label>
              <input
                placeholder="email"
                className="input input-bordered input-primary"
                {...form.register("email")}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered input-primary"
                {...form.register("password")}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">Confirm Password</label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered input-primary"
                {...form.register("confirmPassword")}
                required
              />
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
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalSignup;
