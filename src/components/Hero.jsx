import React from "react";
import { illustration1 } from "../utils";

const Hero = () => {
  return (
    <div
      className="bg-darkestGray h-screen w-full flex flex-col justify-between"
      id="hero"
    >
      <div className="grid md:grid-cols-2 md:gap-5 gap-16 max-w-7xl m-auto px-6">
        <div className="flex flex-col justify-center md:items-start w-full">
          <h1 className="text-white text-5xl mb-5">
            Simplify your life using our references
          </h1>
          <p className="text-lightGray">
            Gunakan referensi kami secara gratis untuk membuat tugas atau
            pekerjaanmu menjadi lebih mudah dan cepat
          </p>
          <button className="mt-8">Explore</button>
        </div>
        <div>
          <img className="w-full" src={illustration1} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
