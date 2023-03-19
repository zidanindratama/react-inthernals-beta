import React from "react";
import styles from "../style";
import { illustration1 } from "../utils";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className={`flex md:flex-row flex-col items-center m-auto md:pt-[200px] pt-10`}
    >
      <div className="flex-1">
        <h1 className="text-white">Simplify your life using our references</h1>
        <p className="text-normalGray my-10">
          Gunakan referensi kami secara gratis untuk membuat tugas atau
          pekerjaanmu menjadi lebih mudah dan cepat
        </p>
        <Button type="button" text="explore" />
      </div>
      <div className={`md:mt-0 mt-10`}>
        <img
          src={illustration1}
          alt="illustration1"
          className="justify-center"
        />
      </div>
    </section>
  );
};

export default Hero;
