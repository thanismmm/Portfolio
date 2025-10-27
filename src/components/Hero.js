import React from "react";
import hero from "../assets/my.png";

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
            <p className="text-2xl">Associate Software Engineer | IT Support</p>
            <p className="">
              Enthusiastic and adaptable professional with a strong foundation in software development and IT support. Skilled in front-end and back-end technologies, including React, Node.js, and Tailwind CSS, with a passion for building scalable and efficient web applications. Experienced in troubleshooting, system maintenance, and providing reliable IT helpdesk support. Eager to contribute to innovative projects, enhance user experiences, and grow continuously as a well-rounded software engineer.
            </p>
            <a
              href="/Thanis_cv.pdf"
              download="Thanis_cv.pdf"
              className="bg-black text-white px-3 py-2 w-max rounded-md"
            >
              Download CV
            </a>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end bg-gray-300 h-[40vh] lg:h-[90vh] md:h-[75vh] -ml-5 w-full md:mr-5 ">
            <img src={hero} alt="" className="lg:h-[100vh]  h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
