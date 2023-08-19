import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaLanguage,
  FaMoon,
  FaCog,
} from "react-icons/fa";

function SettingsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-16">
        <div className="mx-auto max-w-md bg-white rounded-lg shadow-lg p-6">
          {/* Account Settings */}
          <div className="mb-6">
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FaUser className="mr-2" />
              Account
            </h2>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-500 hover:underline">
                  <FaUser className="mr-2" />
                  Change Name
                </button>
              </li>
              <li>
                <button className="text-blue-500 hover:underline">
                  <FaEnvelope className="mr-2" />
                  Change Email
                </button>
              </li>
              <li>
                <button className="text-blue-500 hover:underline">
                  <FaLock className="mr-2" />
                  Change Password
                </button>
              </li>
            </ul>
          </div>

          {/* General Settings */}
          <div className="mb-6">
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FaCog className="mr-2" />
              General
            </h2>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-500 hover:underline">
                  <FaLanguage className="mr-2" />
                  Change Language
                </button>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <p className="flex items-center">
                    <FaMoon className="mr-2" />
                    Dark Mode
                  </p>
                  <input type="checkbox" className="form-checkbox" />
                </div>
              </li>
            </ul>
          </div>

          {/* More Options */}
          <div>
            <h2 className="flex items-center text-lg font-semibold mb-4">
              <FaCog className="mr-2" />
              More Options
            </h2>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-500 hover:underline">
                  <FaCog className="mr-2" />
                  Privacy Settings
                </button>
              </li>
              <li>
                <button className="text-blue-500 hover:underline">
                  <FaEnvelope className="mr-2" />
                  Notifications
                </button>
              </li>
              {/* Add more options here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
