import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 relative">
      <div className="container mx-auto px-4 text-center ">
        <p>© {currentYear} Mohammed Thanis. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
