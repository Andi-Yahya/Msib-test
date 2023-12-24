import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const generateUnderline = (index) => {
    if (index === activeLink) {
      return <div className="bg-white h-2 w-10 p-1 rounded-md"></div>;
    }
    return null;
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    setNavbarVisible(currentScrollY <= 50); 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            overflow-y: auto;
            margin: 0; /* Tambahkan margin 0 untuk menghindari padding bawaan body */
          }
          #navbar {
            opacity: ${navbarVisible ? "1" : "0"};
            transition: opacity 0.3s ease-in-out;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
          }
        `}
      </style>
      <nav
        id="navbar"
        className={`bg-orange-700 transition-all duration-300 ${
          !navbarVisible ? "opacity-0" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-2 xs:px-6 lg:px-8">
          <div className="relative flex h-24 items-center justify-between">
            <img
              className="absolute left-4 h-11 md:w-20 md:h-10 xs:m-5 xs:h-10"
              src="/img/logo-white.png"
              alt=""
            />
            <div className="absolute right-8 flex flex-row">
              <div>
                <ul className="flex gap-7 left xs:hidden group">
                  {[
                    "Work",
                    "About",
                    "Services",
                    "Ideas",
                    "Careers",
                    "Contact",
                  ].map((item, index) => (
                    <li className="font-thin text-white" key={index}>
                      <a href="#" onClick={() => handleLinkClick(index)}>
                        {item}
                      </a>
                      {generateUnderline(index)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ paddingTop: "80px" }}>
      </div>
    </>
  );
};

export default Navbar;
