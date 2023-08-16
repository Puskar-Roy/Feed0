import React from "react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

function PostComp({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-4 shadow-md rounded-md mb-4">
          <div className="flex items-center">
            <img
              src={post.user.profilePicture}
              alt={`${post.user.name}'s profile`}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">{post.user.name}</p>
              <p className="text-gray-500 text-sm">{post.user.timestamp}</p>
            </div>
          </div>
          <p className="mt-3">{post.content}</p>
          <div className="flex mt-4">
            <div className="flex items-center space-x-2">
              <FaThumbsUp className="text-blue-600" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <FaComment className="text-gray-600" />
              <span>{post.comments.length}</span>
            </div>
            <div className="flex items-center space-x-2 ml-auto">
              <FaShare className="text-gray-600" />
              <span>Share</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostComp;
