import React, { useState } from "react";

export const Dropdown = ({ totalItem, setSortPosts}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const totalItems = [10, 20, 50];
  const sortNews = ["Newest", "Oldest"];
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-12 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
            id="menu-button"
            aria-expanded={isActive}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {totalItems[0] }
            <svg
              className={`-mr-1 h-5 w-5 text-gray-400 transform transition-transform ${
                isActive ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isActive && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={()=>setSortPosts(totalItems[0])}
              >
                {totalItems[0]}
              </button>
              <button
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={()=>setSortPosts(totalItems[1])}
              >
                {totalItems[1]}
              </button>
              <button
                
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
                onClick={()=>setSortPosts(totalItems[2])}
              >
                {totalItems[2]}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;