import React from "react";
import { HamSvg } from "../assets/HamSvg";
import image from '../assets/Ash.png'

export const Home = () => {
  return (
    <div className="h-screen bgcolour">
      <header className="">
   <nav className="absolute left-[18px] top-[29px]">

      <HamSvg className="" />
</nav>
        {/* Navbar which contains home projects and blog */}
      </header>

      <main>
        <section className="">
           
          <div class="absolute left-[53px]  w-[415px] top-[-7px]">
           <img src={image} alt="Person holding 500 ruppees"/>
          </div>
    
        </section>
      </main>
    </div>
  );
};
