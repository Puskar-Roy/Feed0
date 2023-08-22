import { useState, useEffect } from "react";
import {
  FaHome,
  FaBell,
  FaEnvelope,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GrSettingsOption } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const middleNavLinks = [
    { to: "/", icon: <FaHome /> },
    { to: "/explore", icon: <FaUsersViewfinder /> },
    { to: "/notifications", icon: <FaBell /> },
    { to: "/messages", icon: <FaEnvelope /> },
  ];

  const rightNavLinks = [
    { to: "/profile", icon: <FaUser /> },
    { to: "/settings", icon: <GrSettingsOption /> },
    { to: "/login", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="fixed top-0 w-full z-40">
      <div className="w-full bg-white shadow-xl rounded-b-3xl flex justify-between p-4">
        <div className="flex items-center space-x-4">
          <img
            className="h-10 w-10 rounded-full"
            src={"/Doraemon.png"}
            alt="Profile"
          />
          <h1 className="font-mono text-lg font-semibold">Feed0</h1>
        </div>

        <div className="flex items-center space-x-6">
          {middleNavLinks.map((link, index) => (
            <NavLinkWithDot
              key={index}
              to={link.to}
              icon={link.icon}
              isActive={activeLink === link.to}
            />
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {rightNavLinks.map((link, index) => (
            <NavLinkWithDot
              key={index}
              to={link.to}
              icon={link.icon}
              isActive={activeLink === link.to}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function NavLinkWithDot({ to, icon, isActive }) {
  return (
    <Link
      to={to}
      className={`text-3xl  hover:text-blue-300 ${
        isActive ? "text-blue-500" : "text-gray-600"
      }`}
    >
      {icon}
      {isActive && (
        <div className="mx-auto mt-2  h-1.5 w-1.5 bg-blue-500 rounded-full"></div>
      )}
    </Link>
  );
}

export default NavBar;
