import React from "react";
import { FaPen, FaImage, FaPollH, FaSmile } from "react-icons/fa";

function CreatePost() {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-medium rounded-full text-blue-400 hover:bg-blue-800 hover:text-blue-300"
        >
          <FaPen className="h-6 w-6" />
        </a>
      </div>

      <hr className="border-gray-300 my-3" />

      <div className="flex">
        <div className="w-12 py-1">
          <img
            className="h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
            alt=""
          />
        </div>
        <div className="flex-1 px-2">
          <textarea
            className="bg-transparent text-gray-700 font-medium text-lg w-full outline-none resize-none placeholder-gray-400"
            rows="3"
            placeholder="What's happening?"
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex">
          <a
            href="#"
            className="mt-1 flex items-center text-blue-400 hover:text-blue-300"
          >
            <FaImage className="h-7 w-6" />
          </a>
          <a
            href="#"
            className="mt-1 flex items-center text-blue-400 hover:text-blue-300 ml-3"
          >
            <FaPollH className="h-7 w-6" />
          </a>
          <a
            href="#"
            className="mt-1 flex items-center text-blue-400 hover:text-blue-300 ml-3"
          >
            <FaSmile className="h-7 w-6" />
          </a>
        </div>
        <button className="bg-blue-400 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600">
          Feed
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
