import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

export const SectionTwo = () => {
  return (
    <section className="text-white mt-2 border-b-[1px]  border-gray-50 pb-4 border-opacity-50 ">
      <h1 className="text-[1.4rem] sm:text-[1.9rem] md:text-[2.4rem] ">
        The Full Stack Maestro
      </h1>
      <ul className="mt-2 text-left text-[1rem] sm:text-[1.3rem] md:text-[1.6rem] leading-10 md:leading-[3.2rem]">
        <li>
          <p>
            <ArrowRightOutlinedIcon sx={{ marginLeft: "-5px" }} /> Nothing to
            everything in the stack.
          </p>
        </li>
        <li>
          <p>
            <ArrowRightOutlinedIcon sx={{ marginLeft: "-5px" }} /> Adore
            collaborating with others.
          </p>
        </li>
        <li>
          <p>
            <ArrowRightOutlinedIcon sx={{ marginLeft: "-5px" }} /> An intense
            desire to learn and apply.
          </p>
        </li>
      </ul>
    </section>
  );
};
