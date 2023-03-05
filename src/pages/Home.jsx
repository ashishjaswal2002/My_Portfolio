import React from "react";
import { HamSvg } from "../assets/HamSvg";
import { SectionOne } from "../components/SectionOne";

export const Home = () => {
  return (
    <div className="h-screen bgcolour ">
      <header className="">
   <nav className="absolute mt-[1.5em] ">

      <HamSvg className="" />
</nav>
        {/* Navbar which contains home projects and blog */}
      </header>

      <main>
    
    <SectionOne/>

      </main>
    </div>
  );
};
