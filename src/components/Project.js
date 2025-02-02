import React from "react";
import newspage from "../assets/newspage.png";
import hospital from "../assets/hospital.png";
import book_rec from "../assets/book_rec.png";
import TE from "../assets/image.png";
import bps from "../assets/bps.png";
import erp from "../assets/erp.png";
import Cards from "./Card";
import eseller from "../assets/eseller.png";
import barber from "../assets/barber.jpg";

const Projects = () => {
  const projectJson = [
    {
      title: "News Page",
      desc: "A fully responsive news platform using React and Open News Content API for real-time updates, and Explore News Within a Click.",
      image: newspage,
      live: "https://news-page-2024.netlify.app/",
      github: "https://github.com/thanismmm/News-Page",
    },

    {
      title: "E-Seller",
      desc: "E-Seller is a modern, responsive e-commerce platform built with React, FakeAPI, React Hooks, and Bootstrap, offering a seamless shopping experience with products, cart management, and an intuitive UI.",
      image: eseller,
      live: "https://e-seller-two.vercel.app/",
      github: "https://github.com/thanismmm/E-Seller",
    },

    {
      title: "Smart Barber",
      desc: "Designed a sleek and user-friendly mobile application, Smart Barber using Figma. The project includes both wireframes and an interactive prototype, ensuring a seamless booking experience for users",
      image: barber,
      live: "https://www.figma.com/design/VEOJjWV5SPnUnOYF5KBZwQ/MR.Barber?node-id=0-1&t=b1up4uCYBR0vqTEM-1",
      github:
        "https://www.figma.com/design/VEOJjWV5SPnUnOYF5KBZwQ/MR.Barber?node-id=0-1&t=b1up4uCYBR0vqTEM-1",
    },

    {
      title: "Solent Health Care",
      desc: "Designed and developed a dynamic hospital website with HTML, CSS, JavaScript, PHP, and MySQL for efficient data management.",
      image: hospital,
      live: "https://solent-health-care.netlify.app/",
      github: "https://github.com/thanismmm/Hospital-Website",
    },
    {
      title: "Traval Explorer",
      desc: "The Travel Explore website helps users discover destinations, plan trips, and book travel packages seamlessly.",
      image: TE,
      live: "https://traval-explore.netlify.app/",
      github: "https://github.com/thanismmm/Traval-Explorer",
    },
    {
      title: "Book Recommendation System",
      desc: "Built a Python-Streamlit application that recommends books based on user preferences and interests.",
      image: book_rec,

      github: "https://github.com/thanismmm/Book-Recommendation-System",
    },
    {
      title: "Bussiness Analysis Dashboard",
      desc: "Developed a Python-based dashboard to analyze trends, profit margins, and other critical business metrics.",
      image: bps,

      github: "https://github.com/thanismmm/BPS",
    },
    {
      title: "Reporting System",
      desc: "Implemented a Python-Streamlit reporting tool with advanced country-wise and product-based filtering and trend analysis capabilities.",
      image: erp,

      github: "https://github.com/thanismmm/ERP-Reporter",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items, index) => {
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
