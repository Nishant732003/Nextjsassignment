"use client";
import React, { useState, useRef, useEffect } from "react";
import SearchInput from "./Serachbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full h-20 flex items-center justify-between px-6 shadow-md">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Image
            className="hidden sm:block w-294px h-60px"
            src="/HobbyCue.svg"
            alt="Your Company"
          />
          <Image
            className="sm:hidden w-48 h-12"
            src="/HobbyCue.svg"
            alt="Your Company"
          />
        </div>
      </div>

      <div className="hidden sm:flex items-center bg-white">
        <SearchInput />
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex sm:ml-2 sm:space-x-4">
          <div className="relative mt-2" ref={dropdownRef}>
            <button
              className="flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              onClick={toggleMenu}
            >
              <Image src="/Explore.svg" className="mr-2 h-5 w-5" alt="Explore" />
              Explore
              <Image
                src="/Dropdown.svg"
                className="h-2 w-3 ml-1"
                alt="Dropdown"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-6 w-48 bg-white shadow-lg">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
                  >
                    People & Community
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
                  >
                    Places & Venue
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
                  >
                    Programs & Events
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
                  >
                    Products & Store
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Blogs
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="#"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ml-2"
          >
            <Image src="/Hobbies.svg" className="mr-2 h-5 w-5" alt="Hobbies" />
            Hobbies
            <Image src="/Dropdown.svg" className="h-2 w-3 ml-1" alt="Dropdown" />
          </a>

          <div className="flex items-center ml-4">
            <Image src="/Vector2.svg" className="ml-5" alt="Vector2" />
            <Image src="/Vector.svg" className="ml-5" alt="Vector" />
            <Image src="/Product.svg" className="ml-5" alt="Product" />
          </div>

          <button className="relative bg-transparent text-blue-700 font-semibold py-1 px-4 border border-searchIcon rounded shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent ml-3">
            SignIn
          </button>
        </div>

        <div className="flex items-center sm:hidden">
          <Image src="/search2.svg" className="ml-5" alt="Vector2" />
          <Image src="/Vector.svg" className="ml-5" alt="Vector2" />
          <Image src="/menu.svg" className="ml-5" />
        </div>
      </div>
    </nav>
  );
}
