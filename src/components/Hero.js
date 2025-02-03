import React from "react";
import hero from "../assets/Hero.png";

const Hero = () => {
  return (
    <section className="font-poppins" id="Hero">
      <div className="max-w-7xl pl-5 ">
        <div className="flex gap-20 flex-col md:flex-row items-center  lg:h-[90vh] justify-between">
          <div className="w-full md:w-1/2 mt-10 md:mt-0 mb-0 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0">
            <h1 className="lg:text-6xl  text-4xl font-bold leading-snug">
              Hi There, <br /> I'm
              <span className="text-red-500"> Thanis</span>
            </h1>
            <p className="text-2xl">Full-Stack Developer (Fresher)</p>
            <p className="">
              Aspiring Full-Stack Developer with expertise in front-end and
              back-end technologies. Passionate about building scalable,
              high-performance web applications. Skilled in React, Node.js, and
              Tailwind CSS, with a strong focus on problem-solving and
              optimization. Eager to contribute to innovative projects while
              continuously learning and growing.
            </p>
            <a
              href="/Thanis_cv.pdf"
              download="Thanis_cv.pdf"
              className="bg-black text-white px-3 py-2 w-max rounded-md"
            >
              Download CV
            </a>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end bg-black h-[40vh] lg:h-[90vh] md:h-[75vh] -ml-5 w-full md:mr-5 ">
            <img src={hero} alt="" className="lg:h-[100vh]  h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
