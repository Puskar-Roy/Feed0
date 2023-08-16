import React from "react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

function PostComp({ user, content, likes, comments }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <div className="flex items-center">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-gray-500 text-sm">{user.timestamp}</p>
        </div>
      </div>
      <p className="mt-3">{content}</p>
      <div className="flex mt-4">
        <div className="flex items-center space-x-2">
          <FaThumbsUp className="text-blue-600" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <FaComment className="text-gray-600" />
          <span>{comments.length}</span>
        </div>
        <div className="flex items-center space-x-2 ml-auto">
          <FaShare className="text-gray-600" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
}

export default PostComp;
