import React from "react";
import { TwitterSvg } from "../assets/TwitterSvg";
import { Github } from "../assets/Github";
import { LinkedIn } from "../assets/LinkedIn";
import { Link } from "react-router-dom";
export const SectionFour = () => {
  return (
    <footer className="mt-10 ">
      <div class=" rounded-lg p-8 h-auto text-white ">
     <p className="text-center">Let's be social together!</p>

        <div className="flex justify-center gap-6 mt-6 items-center">
          
        <Link to=""><TwitterSvg/></Link>
        <Link to=""><Github/></Link>
        <Link to=""><LinkedIn/></Link>
          
          </div>     
      </div>

      <div className="p-3">
      <p className="text-white text-center">&copy; 2023 Ashish Jaswal. All rights reserved.</p>

      </div>
    </footer>
  );
};
