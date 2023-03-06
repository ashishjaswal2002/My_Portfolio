import React from "react";
import image from "../assets/Ash.png";
export const SectionOne = () => {
  return (
    <section className="relative">
      <div className="absolute left-0 top-5">
        <h2 className="">
          Hola,this is <span>&lt;/Ashish&gt;</span>
        </h2>
        <h3>A fully jammed rookie</h3>
      </div>

      <div className="absolute top-24 flex flex-col gap-7 mt-2">
        <div>
          <h1 className="">No stack to full stack</h1>
        </div>
        <div>
          <h1>Love to work with others.</h1>
        </div>

        <div>
          <h1>
            Learning<span>&amp;</span>Implementing
          </h1>
        </div>
      </div>

      <div className="bg-superImage w-[29em] h-[49em]  bg-cover float-right mt-[-9em]"></div>
    </section>
  );
};
