import React from "react";

import HamburgerMenu from "../src/components/HamburgerMenu";
import LoveLottie from "../src/assets/Love";
import { SectionOne } from "../src/components/SectionOne";
import { SectionTwo } from "../src/components/SectionTwo";
import { SectionThree } from "../src/components/SectionThree";
import { SectionFour } from '../src/components/SectionFour';

export const HomePage = () => {
  return (
    <>
      <header >
        <nav className="flex fixedd">
          <div className="hmenu">
          <HamburgerMenu/>
            
          </div>
          <div >
            <LoveLottie />
          </div>
        </nav>
      </header>

      <main>
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
          <section className="showed__up">
          <div className=" border-b-[1px]  border-gray-50  border-opacity-50">

       </div>
        
          </section>

       
      </main>
      <footer>
        <SectionFour/>
      </footer>
    </>
  );
};
