import React from "react";
import {
  FaHome,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaCompass,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";

function SideNav() {
  return (
    <nav className="mt-5 px-2 text-center">
      <a
        href="#"
        className="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-blue-800 text-blue-300"
      >
        <FaHome className="mr-4 h-6 w-6" />
        Home
      </a>
      <a
        href="#"
        className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-blue-800 hover:text-blue-300"
      >
        <FaCompass className="mr-4 h-6 w-6" />
        My Feeds
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
        Saved
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
    </nav>
  );
}

export default SideNav;
