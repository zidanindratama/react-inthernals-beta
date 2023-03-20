import React from "react";
import { darkBrandLogo } from "../utils";
import { RxArrowUp, RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className={`py-6 w-full flex flex-col`}>
      <div className="m-auto px-6">
        <div className="grid md:grid-cols-4 md:gap-10 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img
                src={darkBrandLogo}
                alt="logo_footer"
                className="h-[36px] w-[45px]"
              />
              <h5 className="text-white ml-5">References.</h5>
            </div>
            <p className="text-normalGray py-6">
              Seederhanakan hidup Anda menggunakan referensi dari kami
            </p>
            <div className="flex items-center text-white">
              <RxInstagramLogo />
              <p className="ml-5">
                <a href="#">Inthernals</a>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-white">Our other products</h5>
            <ul className="py-4 text-normalGray">
              <li className="py-2">
                <a href="#">Inthernals Kit</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="text-white">for developers</h5>
            <ul className="py-4 text-normalGray">
              <li className="py-2">
                <a href="#">API Documentation</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="text-white">For admin</h5>
            <ul className="py-4 text-normalGray">
              <li className="py-2">
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between md:mt-20 mt-10 items-center">
          <div className="flex flex-col">
            <p className="text-normalGray">
              Created by <span className="font-bold">Inthernals Team</span>
            </p>
          </div>
          <div className="flex">
            <a
              href="#hero"
              className="bg-transparent text-normalBlue border border-normalBlue py-1 px-2 rounded-lg"
            >
              <RxArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
