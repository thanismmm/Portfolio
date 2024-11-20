import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css3.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Bootstrap from "../assets/bootstrap.png";
import NodeJs from "../assets/nodejs.png";
import MongoDb from "../assets/mongodb.png";
import Express from "../assets/expressJS.png";
import NextJs from "../assets/nextjs.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Thanis
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Front-End Developer with expertise in web development,
              WordPress, SEO, and Currently enhancing my skills in the MERN
              stack to build dynamic and scalable web applications.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-11">
            {/* My Journey Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-lg text-gray-600">
                I started my journey in development with a passion for creating
                intuitive and scalable applications. With proficiency in the
                HTML, CSS,JS and React. I have built Web App projects such as a
                Hospital website, News Page Website, and even a Book
                recommendation System - Python. My projects demonstrate my
                ability to integrate powerful backend solutions with sleek,
                user-friendly frontend designs.
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {/* Skill Cards */}
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Html} alt="HTML" className="w-10" />
                  <span className="font-semibold">HTML</span>
                </div>
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Css} alt="CSS" className="w-10" />
                  <span className="font-semibold">CSS</span>
                </div>
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Javascript} alt="JavaScript" className="w-10" />
                  <span className="font-semibold">JavaScript</span>
                </div>
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={ReactLogo} alt="React" className="w-10" />
                  <span className="font-semibold">React</span>
                </div>
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Bootstrap} alt="Bootstrap" className="w-10" />
                  <span className="font-semibold">Bootstrap</span>
                </div>
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={NodeJs} alt="Node.js" className="w-10" />
                  <span className="font-semibold">Node.js</span>
                </div>
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={MongoDb} alt="MongoDB" className="w-10" />
                  <span className="font-semibold">MongoDB</span>
                </div>
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={Express} alt="Express.js" className="w-10" />
                  <span className="font-semibold">Express.js</span>
                </div>
                <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                  <img src={NextJs} alt="Next.js" className="w-9" />
                  <span className="font-semibold">Next.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* More About Me */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Apart from coding, I am passionate about learning new technologies
              and keeping myself up-to-date with the latest trends in web
              development. I am still learning more advanced JavaScript, MERN
              Stack development, WordPress, and digital marketing, helping
              others dive deep into the world of programming and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
