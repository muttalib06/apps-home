import React from "react";
import {
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaInternetExplorer,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#272727] text-white flex justify-around items-start px-10 py-15">
      <div className="max-w-[25%]">
        <h3 className="font-bold mb-8">HERO.IO</h3>
        <p>
          HERO.IO is a forward-thinking app development company dedicated to
          creating innovative, user-friendly, and high-performance mobile and
          web applications. Our mission is to transform ideas into digital
          solutions that simplify everyday life and empower businesses to reach
          their full potential.
        </p>
      </div>

      <div>
        <h3 className="font-bold mb-8">Quick Links</h3>
        <ul className="space-y-2 text-gray-300 text-[]">
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
        <ul className="space-y-2 text-gray-300 text-[]">
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
          <h4>Subscribe</h4>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>

          <div>
            <h3 className="font-bold mb-8">FOLLOW US</h3>
            <ul>
              <li>
                <a href="">
                  <FaFacebook />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGlobe />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
