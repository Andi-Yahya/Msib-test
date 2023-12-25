import React, { useRef, useState, useEffect } from "react";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const navScroll = useRef(null);
  // let fixedNav = navScroll.current?.offsetTop; // Fix: Add "?." to safely access offsetTop
  // let scrollTop = window.scrollY

  console.log(navScroll);
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    if (currentScroll - lastScroll > 0) {
      navScroll?.current?.classList.add("fixed");
      navScroll?.current?.classList.add("navbar-fixed");
      navScroll?.current?.classList.add("scroll-down");
      navScroll?.current?.classList.remove("scroll-up");
    } else if (currentScroll === 0) {
      navScroll?.current?.classList.remove("fixed");
      navScroll?.current?.classList.remove("navbar-fixed");
    } else {
      navScroll?.current?.classList.add("scroll-up");
      navScroll?.current?.classList.add("fixed");
      navScroll?.current?.classList.remove("scroll-down");
    }

    lastScroll = currentScroll;
  });

  const generateUnderline = (index) => {
    if (index === activeLink) {
      return <div className="bg-white h-2 w-auto  rounded-md"></div>;
    }
    return null;
  };

  const listMenu = ["Work", "About", "Services", "Ideas", "Careers", "Contact"];

  return (
    <>
      <nav
        className="bg-orange-700  fixed z-10  top-0 left-0 w-full transition-all delay-200"
        ref={navScroll}
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
                  {listMenu.map((item, index) => (
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
    </>
  );
};

export default Navbar;
