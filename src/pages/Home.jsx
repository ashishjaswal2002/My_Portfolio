import React from "react";
import { HamSvg } from "../assets/HamSvg";
import { SectionOne } from "../components/SectionOne";
import { OpenNavBar } from "../components/OpenNavBar";
export const Home = () => {
  return (
    <div className=" min-h-screen bgcolour p-6 m-0 ">
      <header className="">
   <nav className="">

      <HamSvg className="" />

      {/* Show open nav bar here */}
   
</nav>
        {/* OpenNavbar which contains home projects and blog */}
      </header>

      <main className="mt-16 text-white">
    
    <SectionOne/>

      </main>
    </div>
  );
};
