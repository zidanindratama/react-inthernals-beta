import React from "react";
import { illustration1 } from "../utils";

const HeroTest = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl mt-5 mb-3">This is our Tech React.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4 ">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={illustration1} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default HeroTest;
