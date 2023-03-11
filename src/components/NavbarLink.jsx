import React from "react";

const NavbarLink = ({ id, title }) => {
  return (
    <li
      className="md:px-4 md:border-none md:py-0 border-b-2 border-darkerGray py-6"
      key={id}
    >
      <a href={`#${id}`}>
        <h6>{title}</h6>
      </a>
    </li>
  );
};

export default NavbarLink;
