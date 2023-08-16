import React from "react";
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaList,
  FaUser,
  FaEllipsisH,
  FaTwitter,
} from "react-icons/fa";

function SideNav() {
  return (
    <nav className="mt-5 px-2">
      <a
        href="#"
        className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-800 text-blue-300"
      >
        <FaTwitter className="mr-4 h-6 w-6" />
        Home
      </a>
      <a
        href="#"
        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <FaHashtag className="mr-4 h-6 w-6" />
        Explore
      </a>
      <a
        href="#"
        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <FaBell className="mr-4 h-6 w-6" />
        Notifications
      </a>
      <a
        href="#"
        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <FaEnvelope className="mr-4 h-6 w-6" />
        Messages
      </a>
      <a
        href="#"
        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <FaBookmark className="mr-4 h-6 w-6" />
        Bookmarks
      </a>
      <a
        href="#"
        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <FaList className="mr-4 h-6 w-6" />
        Lists
      </a>
      <a
        href="#"
        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <FaUser className="mr-4 h-6 w-6" />
        Profile
      </a>
      <a
        href="#"
        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <FaEllipsisH className="mr-4 h-6 w-6" />
        More
      </a>
      <button className="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
        Tweet
      </button>
    </nav>
  );
}

export default SideNav;
