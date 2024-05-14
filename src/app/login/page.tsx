"use client";
import ModalLogin from "@/components/ModalLogin";
import React, { useEffect, useState } from "react";

const page = () => {
  useEffect(() => {
    const modal = document.getElementById("my_modal_2");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    } else {
      console.error(
        "The element #my_modal does not exist or is not a dialog element."
      );
    }
  }, []);
  return (
    <>
      <ModalLogin />
    </>
  );
};

export default page;
