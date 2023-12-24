import React from "react";

const Cart = ({ posts }) => {

  return (
    <>
      {posts && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.data?.map((post) => (
            <div
              key={post.id}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-64 object-cover "
                src={post.medium_image[0].url || "https://placehold.co/150x100"}
                alt={post.title || "Placeholder"}
                width={350}
							height={350}
                loading="lazy"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-base mb-2">
                  {post.title.substring(0, 50) || "Untitled"}
                  {
                    post.title.length > 40 ? post.title.substring(0, 15) + "..." || "Untitled" : post.title.substring(0, 30)
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!posts || (posts.length === 0 && <p>No posts available.</p>)}
    </>
  );
};

export default Cart;
