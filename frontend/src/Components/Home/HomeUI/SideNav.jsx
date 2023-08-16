import React from "react";
import {
  FaHome,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaCompass,
  FaUser,
  FaEllipsisH,
  FaSignOutAlt,
} from "react-icons/fa";

function SideNav() {
  return (
    <nav className=" px-2 text-center text-white text-base font-semibold space-y-2">
      <a
        href="#"
        className=" flex items-center px-2 py-2      rounded-full bg-blue-800 "
      >
        <FaHome className="mr-4 h-6 w-6" />
        Home
      </a>
      <a
        href="#"
        className="  flex items-center px-2 py-2       rounded-full  hover:bg-blue-300   text-black"
      >
        <FaCompass className="mr-4 h-6 w-6" />
        My Feeds
      </a>
      <a
        href="#"
        className="  flex items-center px-2 py-2       rounded-full  hover:bg-blue-300   text-black"
      >
        <FaBell className="mr-4 h-6 w-6" />
        Notifications
      </a>
      <a
        href="#"
        className="  flex items-center px-2 py-2       rounded-full  hover:bg-blue-300   text-black"
      >
        <FaEnvelope className="mr-4 h-6 w-6" />
        Messages
      </a>
      <a
        href="#"
        className="  flex items-center px-2 py-2       rounded-full  hover:bg-blue-300   text-black"
      >
        <FaBookmark className="mr-4 h-6 w-6" />
        Saved
      </a>

      <a
        href="#"
        className="  flex items-center px-2 py-2       rounded-full  hover:bg-blue-300   text-black"
      >
        <FaUser className="mr-4 h-6 w-6" />
        Profile
      </a>
      <a
        href="#"
        className="  flex items-center px-2 py-2       rounded-full  hover:bg-blue-300   text-black"
      >
        <FaSignOutAlt className="mr-4 h-6 w-6" />
        Logout
      </a>
    </nav>
  );
}

export default SideNav;
