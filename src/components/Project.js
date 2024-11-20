import React from "react";
import newspage from "../assets/newspage.png";
import hospital from "../assets/hospital.png";
import book_rec from "../assets/book_rec.png";
import bps from "../assets/bps.png";
import erp from "../assets/erp.png";
import Cards from "./Card";

const Projects = () => {
  const projectJson = [
    {
      title: "News Page",
      desc: "A fully responsive news platform using React and Open News Content API for real-time updates.",
      image: newspage,
      live: "https://news-page-2024.netlify.app/",
      github: "https://github.com/thanismmm/News-Page",
    },
    {
      title: "Solent Health Care",
      desc: "Designed and developed a dynamic hospital website with HTML, CSS, JavaScript, PHP, and MySQL for efficient data management.",
      image: hospital,
      live: "https://solent-health-care.netlify.app/",
      github: "https://github.com/thanismmm/Hospital-Website",
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
