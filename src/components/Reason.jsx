import React from "react";
import { reasons } from "../constants";
import { illustration2 } from "../utils";
import { Verify } from "iconsax-react";

const Reason = () => {
  return (
    <div className="bg-darkestGray h-screen w-full">
      <div className="grid md:grid-cols-2 gap-36 max-w-7xl m-auto px-6">
        <div>
          <img className="w-full" src={illustration2} alt="/" />
        </div>
        <div className="flex flex-col justify-center md:items-start w-full">
          <h1 className="text-white text-5xl mb-5">
            The best reason to start using our app
          </h1>
          {reasons.map((reason) => {
            const { id, title } = reason;
            return (
              <p className="text-lightGray flex pb-6" key={id}>
                <Verify className="mr-5 text-normalBlue" />
                {title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reason;
