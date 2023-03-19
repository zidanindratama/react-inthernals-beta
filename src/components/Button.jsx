import React from "react";

const Button = ({ text, styles, type }) => {
  return (
    <button
      type={type}
      className={`py-3 px-6 bg-normalBlue text-darkestGray font-semibold rounded-lg capitalize ${
        styles ? styles : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
