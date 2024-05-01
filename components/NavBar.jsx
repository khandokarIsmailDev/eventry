import React from "react";
import Image from "next/image";
import Link from "next/link";
import SigninOUt from "./auth/SigninOUt";

const NavBar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <a href="index.html">
            <Image
             src={'/logo.png'} 
             alt="Eventry" 
             width={500}
             height={300}
             className=" w-48 bg-gray-300 rounded-lg" />
          </a>
        </div>
        <ul className="flex gap-4 text-[#9C9C9C]">
          <li> <SigninOUt/> </li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
