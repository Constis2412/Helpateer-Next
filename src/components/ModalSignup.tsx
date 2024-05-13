"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
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
    disability: z.string(),
    hilfbeduerftig: z.boolean(),
    bio: z.string(),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const ModalSignup = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
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

  const useEffect = () => {
    const modal = document.getElementById("my_modal");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error(
        "The element #my_modal does not exist or is not a dialog element."
      );
    }
  };

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
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
      router.push("/sign-in");
    } else {
      console.error("Registration failed");
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
        <div className="modal-box">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="card-body py-1"
            >
              <div className="form-control">
                <h1 className="text-3xl font-bold">Join the Team!</h1>
              </div>

              
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="form-control">
                      <label className="label">
                      <FormLabel className="label-text">First Name</FormLabel>
                      </label>
                      <FormControl>
                        <input
                          type="text"
                          placeholder="first name"
                          className="input input-bordered input-primary"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              
             
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="form-control">
                      <label className="label">
                      <FormLabel className="label-text">Last Name</FormLabel>
                      </label>
                      <FormControl>
                        <input
                          type="text"
                          placeholder="last name"
                          className="input input-bordered input-primary"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              
              <div className="flex">
                
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem className="form-control w-[50%]">
                         <label className="label">
                      <FormLabel className="label-text">Age</FormLabel>
                      </label>
                        <FormControl>
                          <input
                            type="number"
                            placeholder="age"
                            className="input input-bordered input-primary w-[50%]"
                            {...field}
                            onChange={(e)=>field.onChange(Number(e.target.value))}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
               
                
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem className="form-control w-[50%]">
                         <label className="label">
                      <FormLabel className="label-text">Gender</FormLabel>
                      </label>
                        <FormControl>
                          <select
                            className="select select-primary w-full max-w-xs"
                            {...field}
                            required
                          >
                            <option value="" disabled>
                              Select gender
                            </option>
                            <option value="Man">Man</option>
                            <option value="Woman">Woman</option>
                            <option value="Diverse">Diverse</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
               
              </div>
             
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="form-control">
                      <label className="label">
                      <FormLabel className="label-text">Email</FormLabel>
                      </label>
                      <FormControl>
                        <input
                          type="email"
                          placeholder="email"
                          className="input input-bordered input-primary"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
         
              
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="form-control">
                       <label className="label">
                      <FormLabel className="label-text">Password</FormLabel>
                      </label>
                      <FormControl>
                        <input
                          type="password"
                          placeholder="password"
                          className="input input-bordered input-primary"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
             
              
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="form-control">
                       <label className="label">
                      <FormLabel className="label-text">Confirm Password</FormLabel>
                      </label>
                      <FormControl>
                        <input
                          type="password"
                          placeholder="confirm password"
                          className="input input-bordered input-primary"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
           
              <div className="form-control mt-6">
                <button className="btn btn-primary hover:btn-secondary">
                  Sign Up
                </button>
              </div>
            </form>
          </Form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalSignup;
