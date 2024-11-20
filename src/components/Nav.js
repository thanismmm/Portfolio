import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="font-poppins font-bold sticky top-0 z-50 w-full border-b-2 bg-gray-300 px-4 lg:px-0 lg:text-3xl">
      <div className="max-w-7xl mx-6 flex h-16 items-center justify-center lg:mx-20">
        {/* Logo Section */}
        <div className=" mr-4 flex justify-between w-full">
          <h1 className="">TN Dev.</h1>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
            <a
              href="#Hero"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </a>
          </nav>

          {/* Hamburger Menu Button for smaller screens */}
          <button
            className="inline-flex items-center justify-center rounded-md md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-3 py-2 pb-3 pt-2">
            <a
              href="#Hero"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
