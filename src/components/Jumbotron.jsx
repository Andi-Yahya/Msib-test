import React from "react";

export const Jumbotron = () => {
  return (
    <>
      <div className="max-w-full overflow-x-hidden overflow-y-hidden">
        <div className="relative h-60 flex justify-center items-center">
          <div className="-z-[10] absolute bg-[url('/img/banner.jpg')] w-full h-48 mb-8 transform bottom-9 mb:bottom-28 scale-150 bg-cover -translate-y-1 -skew-y-6"></div>
          <div className="text-center font-bold text-white">
            <h1>Ideas</h1>
            <p>Where all our great things begin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
