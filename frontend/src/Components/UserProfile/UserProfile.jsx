import React from "react";
import { FaEdit, FaUserPlus, FaEnvelope } from "react-icons/fa";

function UserProfile() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center">
            {/* User Profile Image */}

            <FaUserPlus className="text-indigo-500 text-3xl" />
          </div>
          <button className="text-blue-500 hover:underline">
            <FaEdit /> Edit Profile
          </button>
        </div>

        <div className="mt-4">
          <h1 className="text-3xl font-semibold">Jessica Jones</h1>
          <p className="text-gray-500 mt-1">Bucharest, Romania</p>

          <p className="mt-4 text-gray-500">
            Solution Manager - Creative Tim Officer
          </p>
          <p className="mt-1 text-gray-500">University of Computer Science</p>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex items-center space-x-2">
            <p className="font-semibold">22</p>
            <p className="text-gray-500">Following</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">10</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">89</p>
            <p className="text-gray-500">Posts</p>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            <FaUserPlus className="mr-2" />
            Follow
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
            <FaEnvelope className="mr-2" />
            Message
          </button>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
            <FaEnvelope className="mr-2" />
            Incognito Messege
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">About Me</h2>
          <p className="text-gray-600 mt-2">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
        </div>

        <div className="mt-6">
          {/* User's Posts */}
          {/* add user's posts here */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
