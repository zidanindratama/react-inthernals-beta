import React from "react";
import styles, { layout } from "../style";
import { reasons } from "../constants";
import { illustration2 } from "../utils";
import { RxCheckCircled } from "react-icons/rx";

const Reason = () => {
  return (
    <section className={`w-full flex flex-col pt-[300px]`} id="reason">
      <div className="m-auto px-6">
        <div className={`${layout.section} md:gap-36 gap-16`}>
          <div className={`${layout.sectionImg}`}>
            <img
              className="w-[100%] h-[100%] relative z-[5]"
              src={illustration2}
              alt="/"
            />
          </div>
          <div className={`${layout.sectionInfo}`}>
            <h1 className="text-white mb-10">
              The best reason to start using our app
            </h1>
            {reasons.map((reason, index) => {
              const { id, title } = reason;
              return (
                <p
                  className={`text-normalGray flex ${
                    index !== reasons.length - 1 ? "mb-6" : ""
                  }`}
                  key={id}
                >
                  <RxCheckCircled className="mr-5 text-normalBlue" size={25} />
                  {title}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
