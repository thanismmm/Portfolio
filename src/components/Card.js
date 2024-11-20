import React from "react";
import Github from "../assets/github.png";

const Cards = ({ item }) => {
  return (
    <div className="group border border-red-500 rounded-lg w-[300px] sm:w-[350px] lg:w-[400px] bg-red-50 shadow-lg">
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[200px] object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
        <p className="text-gray-700">{item.desc}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-red-500 text-white px-3 py-2 rounded-md">
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-md">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center"
            >
              <img
                src={Github}
                alt="GitHub"
                className="w-6 bg-white rounded-md"
              />
              GitHub
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
