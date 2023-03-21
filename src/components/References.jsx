import React from "react";
import { exportIcon } from "../assets/Iconsax_Linear/Used";

const References = ({
  id,
  referenceCount,
  referenceTitle,
  referenceText,
  referenceLink,
  referenceIcon,
  styles,
}) => {
  return (
    <div
      className={`border-normalBlue rounded-lg border-2 py-6 px-12 ${styles}`}
    >
      <div className="flex flex-row items-center mb-6">
        <img src={referenceIcon} alt="" />
        <h3 className="text-white ml-5">{referenceCount}+</h3>
      </div>
      <div className="flex flex-col mb-6">
        <h5 className="text-normalBlue mb-4">{referenceTitle}</h5>
        <p className="text-normalGray">{referenceText}</p>
      </div>
      <a href={referenceLink} className="flex flex-row items-center">
        <p className="text-white font-semibold capitalize">Explore now</p>
        <img src={exportIcon} alt="" className="w-[20px] h-[20px] ml-5" />
      </a>
    </div>
  );
};

export default References;
