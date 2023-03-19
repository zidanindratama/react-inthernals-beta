import React from "react";

const NavbarLink = ({ id, title, styles }) => {
  return (
    <li className={`text-small text-white ${styles}`}>
      <a href={`#${id}`}>{title}</a>
    </li>
  );
};

export default NavbarLink;
