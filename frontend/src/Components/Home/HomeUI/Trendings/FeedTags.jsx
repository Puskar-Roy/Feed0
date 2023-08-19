import React from "react";
import { FaChevronDown } from "react-icons/fa";

function FeedTag({ index, tag, feeds }) {
  return (
    <div className="flex px-2 justify-between px-1 items-center w-full rounded-lg outline outline-gray-400">
      <div className="">
        <p className=" ml-2 mt-3  flex  text-xs text-gray-400">
          {index + 1}. {tag.category} . Trending
        </p>
        <h2 className="px-4 ml-2   font-bold">#{tag.name}</h2>

        <p className="px-4 ml-2 mb-3   text-xs text-gray-400">{feeds} Feeds</p>
      </div>
      <div className=" py-2 m-2">
        <a
          href=""
          className="text-2xl rounded-full text-gray-400 hover:bg-blue-800 hover:text-blue-300 float-right"
        >
          <FaChevronDown className="m-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

function FeedTags() {
  const feedTags = [
    { name: "ImKKingshuk", category: "Person", feeds: 8465 },
    { name: "Puskar", category: "Person", feeds: 8463 },
    { name: "React", category: "TechStack", feeds: 846 },
    { name: "Vite", category: "TechStack", feeds: 84 },
    // ... Add more feed tags
  ];

  return (
    <div className="overflow-y-auto space-y-4 w-full h-[18rem] rounded-lg p-2 outline outline-gray-300 ">
      {feedTags.map((tag, index) => (
        <FeedTag key={index} index={index} tag={tag} feeds={tag.feeds} />
      ))}
    </div>
  );
}

export default FeedTags;
