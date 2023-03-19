import React, { useState } from "react";
import { darkBrandLogo } from "../utils";
import { navLinks } from "../constants";
import NavbarLink from "./NavbarLink";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="flex justify-between items-center py-6">
        <div className="flex flex-row">
          <img
            src={darkBrandLogo}
            alt="logo__navbar"
            className="h-[26px] w-[35px]"
          />
          <h3 className="ml-3 text-white">References.</h3>
        </div>
        <ul className="md:flex flex-row hidden">
          {navLinks.map((link, index) => {
            return (
              <NavbarLink
                key={link.id}
                {...link}
                styles={index !== navLinks.length - 1 ? "mr-10" : ""}
              />
            );
          })}
        </ul>
        <div className="md:hidden flex">
          {isNavOpen ? (
            <RxHamburgerMenu
              className="text-white"
              size={20}
              onClick={toggleNavbar}
            />
          ) : (
            <RxCross1 className="text-white" size={20} onClick={toggleNavbar} />
          )}
        </div>
      </nav>
      {!isNavOpen && (
        <ul className="md:hidden flex flex-col justify-center items-center animation__navbar">
          {navLinks.map((link, index) => {
            return (
              <>
                <NavbarLink key={link.id} {...link} styles="my-6" />
                <hr className="border w-full border-darkerGray" />
              </>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Navbar;
