import React from "react";
import { TypeSript } from "../assets/SVG/TypeSript";
import { ReactSvg } from "../assets/SVG/ReactSvg";
import { Java } from "../assets/SVG/Java";
import { NodeJs } from "../assets/SVG/NodeJs";

export const SectionThree = () => {
  return (
    <section className="text-white mt-10 w-full backdrop-blur-md backdrop-opacity-50 bg-gray-800 rounded-lg h-auto font-Poppins sm:text-[1.2rem] md:text-[1.9rem] ">
      <div className="p-4">
        <h2>My Tech Stack</h2>
      </div>
      <div className="mt-3 w-full h-auto p-5  grid grid-cols-2  gap-8">
        <div className="flex items-center gap-3">
          <TypeSript />
          <p>TypeScript</p>
        </div>
        <div className="flex items-center gap-3">
          <ReactSvg />
          <p>React</p>
        </div>
        <div className="flex items-center gap-3">
          <Java />
          <p>Java</p>
        </div>
        <div className="flex items-center gap-3">
          <NodeJs />
          <p>Node Js</p>
        </div>
      </div>
    </section>
  );
};
