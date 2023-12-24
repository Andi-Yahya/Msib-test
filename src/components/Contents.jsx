import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Cart from "./Cart";
import axios from "axios";
import Dropdown2 from "./Dropdown2";

export const Contents = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortNewPosts, setSortNewPosts] = useState([]); // Corrected the initial sort value
  const [sortPosts, setSortPosts] = useState(10);


  const dateStrings = (dates) => {
    let dateTimes = dates.map(dateString => new Date(dateString));
    dateTimes.sort((a, b) => b - a);
    console.log(dateTimes);
    // setSortNewPosts(dateTimes);
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPage}&page[size]=${sortPosts}&append[]=small_image&append[]=medium_image&sort=-published_at`
      );
      setPosts(res.data);

    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage, sortPosts]); 

  const metaCart = posts.meta;
  console.log(metaCart);

  return (
    <>
      <div className="justify-center items-center p-7 mx-16 border">
        <div className="flex flex-row w-full">
          <div className="flex justify-between items-center border w-full">
            {metaCart && (
              <p className="text-sm text-gray-700 gap-8 ">
                Showing <span className="font-medium">{metaCart.from}</span> to{" "}
                <span className="font-medium">{metaCart.to}</span> of{" "}
                <span className="font-medium">{metaCart.total}</span> results
              </p>
            )}
            <div className="flex gap-11 items-center ">
              <p>Show Per Page</p>
              <Dropdown totalItem="totalItem" setSortPosts={setSortPosts} />
              <p>Sort By</p>
              <Dropdown2 sortNew="sortNew" setSortNewPosts={setSortNewPosts} />
            </div>
          </div>
        </div>
        <Cart posts={posts} />
      </div>
    </>
  );
};

export default Contents;
