import React from "react";
import { referenceType } from "../constants";
import References from "./References";

const ReferenceType = () => {
  return (
    <section
      className={`w-full flex flex-col md:pt-[300px] md:pb-[30px] pt-[180px]`}
      id="reference"
    >
      <div className="px-6 text-center m-auto">
        <div className="flex flex-col text-center m-auto">
          <h1 className="text-white">Our reference type</h1>
          <p className="text-normalGray my-10 max-w-[700px] text-center m-auto">
            Kami memiliki 3 tipe referensi yang masing-masing jumlahnya akan
            terus bertambah dan bisa kamu gunakan sesuai dengan kebutuhanmu
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-16 md:mt-[60px] mt-[10px]">
        {referenceType.map((reference, index) => {
          return (
            <References
              key={reference.id}
              {...reference}
              styles={!index === referenceType.length - 1 ? "gap-16" : "0"}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ReferenceType;
