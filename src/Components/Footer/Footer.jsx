
import React from "react";
import { BiSend } from "react-icons/bi";
import { CgCopyright } from "react-icons/cg";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaInternetExplorer,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#272727] text-white flex flex-col md:flex-row justify-around items-start px-10 py-15 mt-8 space-y-4 md:space-y-0">
        <div className="md:max-w-[25%]">
          <h3 className="font-bold mb-8">HERO.IO</h3>
          <p className="text-[0.8rem] text-gray-500">
            HERO.IO is a forward-thinking app development company dedicated to
            creating innovative, user-friendly, and high-performance mobile and
            web applications. Our mission is to transform ideas into digital
            solutions that simplify everyday life and empower businesses to
            reach their full potential.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-8">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-[0.8rem]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-8">Legal Information</h3>
          <ul className="space-y-2 text-gray-300 text-[0.8rem]">
            <li>
              <a href=""></a>Privacy Policy
            </li>
            <li>
              <a href="">Terms and Condition</a>
            </li>
            <li>
              <a href="">Cookie Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h4 className="font-bold">SUBSCRIBE</h4>

            <div className="flex gap-2 p-4">
              <input
                type="text"
                placeholder="Enter email address"
                className="input input-bordered w-full max-w-xs bg-[#313131]"
              />
              <button className="btn btn-primary bg-[#f9b829]">
                <BiSend className="text-white text-lg" />
              </button>
            </div>

            <div className="mt-13 space-y-3">
              <h3 className="font-bold">FOLLOW US</h3>
              <ul className="flex items-center gap-4">
                <li className="shadow-md p-3 border border-gray-700 rounded">
                  <a href="">
                    <FaFacebook />{" "}
                  </a>
                </li>
                <li className="shadow-md p-3 border border-gray-700 rounded">
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
                <li className="shadow-md p-3 border border-gray-700 rounded">
                  <a href="">
                    <FaGlobe />
                  </a>
                </li>
                <li className="shadow-md p-3 border border-gray-700 rounded">
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] px-10 py-10 flex flex-col md:flex-row justify-around items-center text-white space-y-3 md:space-y-0">
        <p className="flex items-center text-[.7rem] text-gray-400">Copyright<CgCopyright/> All rights reserved by HERO.IO</p>

        <div className="flex items-center gap-4 text-[.7rem] text-gray-400">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Compliances</p>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
