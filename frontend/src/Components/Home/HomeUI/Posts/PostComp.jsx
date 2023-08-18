import React from "react";
import { FaThumbsUp, FaThumbsDown, FaComment, FaShare } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

function PostComp({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 shadow-xl rounded-2xl mb-4">
          <div className="flex items-center">
            <img
              src={post.public_imageUrl}
              alt={`${post.author}'s profile`}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-gray-500 text-sm">{post.timestamp}</p>
            </div>
          </div>
          <p className="mt-3">{post.content}</p>

          <div className="flex mt-4 justify-between">
            <div className="flex items-center space-x-2">
              <FaThumbsUp className="text-blue-600" />
              <span>{post.likes.length}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaThumbsDown className="text-gray-600" />
              {/* <span>{post.dislikes}</span> */}
            </div>
            <div className="flex items-center space-x-2 ">
              <FaComment className="text-gray-600" />
              <span>{post.comments.length}</span>
            </div>
            <div className="flex items-center space-x-2 ">
              <FaShare className="text-gray-600" />
            </div>
            <div className="flex items-center space-x-2 ">
              <FaEllipsisVertical className="text-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostComp;
