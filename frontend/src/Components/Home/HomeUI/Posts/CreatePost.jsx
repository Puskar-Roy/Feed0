import React from "react";
import { FaVideo, FaImage, FaPollH, FaSmile } from "react-icons/fa";

function CreatePost() {
  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-4">
      <div className="flex">
        <div className="w-12 py-1">
          <img className="h-10 w-10 rounded-full" src="/Doraemon.png" alt="" />
        </div>
        <div className="flex-1 px-2">
          <input
            className="bg-gray-200 text-gray-700 font-medium text-lg w-full outline outline-blue-400 resize-none placeholder-white"
            rows="3"
            placeholder="What's happening?"
          ></input>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex space-x-5">
          <a href="#" className="items-center text-gray-400 hover:text-sky-400">
            <FaImage className="h-6 w-6" />
          </a>
          <a href="#" className="items-center text-gray-400 hover:text-sky-400">
            <FaVideo className="h-6 w-6" />
          </a>
          <a href="#" className="items-center text-gray-400 hover:text-sky-400">
            <FaPollH className="h-6 w-6" />
          </a>
          <a href="#" className="items-center text-gray-400 hover:text-sky-400">
            <FaSmile className="h-6 w-6" />
          </a>
        </div>
        <button className="bg-blue-400 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-600">
          Feed
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
