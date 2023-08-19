import React from "react";
import { FaUserPlus } from "react-icons/fa";

function formatFollowersCount(followers) {
  if (followers >= 1000000) {
    return (followers / 1000000).toFixed(1) + "M";
  } else if (followers >= 1000) {
    return (followers / 1000).toFixed(1) + "K";
  } else {
    return followers.toString();
  }
}

function SuggestedPerson({ name, username, followers }) {
  const formattedFollowers = formatFollowersCount(followers);

  return (
    <div className="flex flex-shrink-0 w-full rounded-lg outline outline-gray-400">
      <div className="flex-1">
        <div className="flex items-center ">
          <div>
            <img
              className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
              src="/Doaremon.png"
              alt={name}
            />
          </div>
          <div className="ml-3 mt-3">
            <p className="text-base leading-6 font-medium text-white">{name}</p>
            <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              @{username}
            </p>
            <p className="text-xs leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
              {formattedFollowers} Followers
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-4 py-2 m-2">
        <a href="">
          <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full">
            <FaUserPlus className="mr-2 h-4 w-4 inline-block" /> Follow
          </button>
        </a>
      </div>
    </div>
  );
}

function TrendingUsers() {
  const suggestedPeople = [
    { name: "Feed0 Official", username: "Feed0", followers: 1200000 },
    // ... Add more suggested people
  ];

  return (
    <div className="overflow-y-auto space-y-4 w-full h-[18rem] mx-auto  p-4 ">
      {suggestedPeople.map((person, index) => (
        <SuggestedPerson
          key={index}
          name={person.name}
          username={person.username}
          followers={person.followers}
        />
      ))}
    </div>
  );
}

export default TrendingUsers;
