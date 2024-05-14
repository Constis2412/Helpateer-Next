"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = () => {
  return <><button
  className="btn btn-primary hover:btn-accent mt-8"
  onClick={() => signOut()}
>
  Logout
</button></>;
};

export default SignOutButton;
