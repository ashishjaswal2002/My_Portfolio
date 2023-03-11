import React from "react";
import { TwitterSvg } from "../assets/TwitterSvg";
import { Github } from "../assets/Github";
import { LinkedIn } from "../assets/LinkedIn";
import { Link } from "react-router-dom";
export const SectionFour = () => {
  return (
    <div className=" rounded-lg p-8 h-auto text-white mt-10  sm:text-[1.3rem] md:text-[1.2rem] ">
      <p className="text-center">Let's be social together!</p>

      <div className="flex justify-center gap-6 mt-6 items-center  ">
        <Link to="https://twitter.com/Ashishjas2002">
          <TwitterSvg />
        </Link>
        <Link to="https://github.com/ashishjaswal2002">
          <Github />
        </Link>
        <Link to="https://www.linkedin.com/in/ashish-jaswal-288b1a20a">
          <LinkedIn />
        </Link>
      </div>

      <div className="p-3">
        <p className="text-white text-center">
          &copy; 2023 Ashish Jaswal. All rights reserved.
        </p>
      </div>
    </div>
  );
};
