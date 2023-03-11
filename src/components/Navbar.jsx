import React, { useState } from "react";
import { darkBrandLogo } from "../utils";
import { navLinks } from "../constants";
import { HambergerMenu } from "iconsax-react";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="h-[80px] w-screen bg-darkestGray items-center sticky">
      <div className="flex justify-between max-w-screen-2xl m-auto px-6 items-center w-full h-full">
        <div className="flex items-center">
          <img src={darkBrandLogo} alt="" className="h-[26px] w-[35px]" />
          <h3 className="ml-1 text-white">References.</h3>
        </div>
        <ul className="md:flex hidden text-white">
          {navLinks.map((navLink) => {
            return <NavbarLink {...navLink} />;
          })}
        </ul>
        <div className="md:hidden flex">
          <HambergerMenu
            className="text-white"
            size={30}
            onClick={toggleNavbar}
          />
        </div>
      </div>
      {isNavOpen && (
        <ul className="md:hidden block text-white bg-darkestGray w-full px-8">
          {navLinks.map((navLink) => {
            return <NavbarLink {...navLink} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
