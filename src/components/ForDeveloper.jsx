import React from "react";

const ForDeveloper = () => {
  return (
    <div className="bg-darkestGray h-screen w-full flex flex-col justify-between">
      <div className="max-w-7xl m-auto px-6 text-center">
        <h1 className="text-white text-5xl mb-5">
          For developers who want to create projects
        </h1>
        <p className="text-lightGray max-w-lg m-auto">
          Kami menyediakan API berisi data dari referensi kami yang bisa kamu
          gunakan untuk membuat website atau aplikasi mobile
        </p>
        <button className="mt-8">Read Documentation</button>
      </div>
    </div>
  );
};

export default ForDeveloper;
