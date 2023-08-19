import React from "react";
import { FaChevronDown } from "react-icons/fa";

function FeedTag({ index, tag, feeds }) {
  return (
    <div className="flex w-full ">
      <div className="flex-1">
        <p className="px-4 ml-2 mt-3   text-xs text-gray-400">
          {index + 1}. {tag.category} . Trending
        </p>
        <h2 className="px-4 ml-2   font-bold text-white">#{tag.name}</h2>
        <p className="px-4 ml-2 mb-3   text-xs text-gray-400">{feeds} Feeds</p>
      </div>
      <div className="flex-1 px-4 py-2 m-2">
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
    { name: "React", category: "TechStack", feeds: 8464 },
    { name: "React", category: "TechStack", feeds: 8464 },
    { name: "React", category: "TechStack", feeds: 8464 },
    { name: "React", category: "TechStack", feeds: 8464 },
    // ... Add more feed tags
  ];

  return (
    <div className="overflow-y-auto space-y-4 w-full h-[18rem] rounded-lg px-4 outline outline-gray-400 ">
      {feedTags.map((tag, index) => (
        <FeedTag key={index} index={index} tag={tag} feeds={tag.feeds} />
      ))}
    </div>
  );
}

export default FeedTags;
