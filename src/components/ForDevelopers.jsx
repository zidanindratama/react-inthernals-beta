import React from "react";
import { layout } from "../style";
import Button from "./Button";

const ForDevelopers = () => {
  return (
    <section className={`h-screen w-full flex flex-col`} id="developer">
      <div className="m-auto px-6 text-center">
        <h1 className="text-white mb-5 text-center">
          For developers who want to create projects
        </h1>
        <p className="text-normalGray max-w-lg m-auto">
          Kami menyediakan API berisi data dari referensi kami yang bisa kamu
          gunakan untuk membuat website atau aplikasi mobile
        </p>
        <Button type="button" text="Read Documentation" styles="mt-8" />
      </div>
    </section>
  );
};

export default ForDevelopers;
