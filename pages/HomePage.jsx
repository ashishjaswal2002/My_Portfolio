import React from "react";

import HamburgerMenu from "../src/components/HamburgerMenu";
import LoveLottie from "../src/assets/Love";
import { SectionOne } from "../src/components/SectionOne";
import { SectionTwo } from "../src/components/SectionTwo";

export const HomePage = () => {
  return (
    <>
      <header className="">
        <nav className="flex fixedd">
          <div className="hmenu">
          <HamburgerMenu/>
            
          </div>
          <div className="">
            <LoveLottie />
          </div>
        </nav>
      </header>

      <main>
        <SectionOne />
        <SectionTwo/>
      </main>
    </>
  );
};
