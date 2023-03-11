import React from "react";
import Image from "../assets/Ash.png";
export const SectionOne = () => {
  return (
    <section className="text-[1.2rem] p-[7px] text-white mt-10 leading-9 sm:text-[1.7rem] md:text-[2.2rem] md:leading-[4rem]">
      <p>
        Hola this is <span className="font-SS">&lt;/Ashish&gt;</span>{" "}
      </p>
      <p className="font-normal mt-2">A fully jammed rookie</p>

      <div className="md:w-[60%] md:h-[50%] md:mx-auto sm:w-[60%] sm:h-[50%] sm:mx-auto ">
        <img
          src={Image}
          alt="Ashish's Profile Picture"
          fetchpriority="high"
          className="w-[100%] h-[auto] "
        />
      </div>
    </section>
  );
};
