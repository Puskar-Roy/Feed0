import React from "react";
import SearchBar from "./Search/SearchBar";
import TrendingUsers from "./Trendings/TrendingUsers";
import FeedTags from "./Trendings/FeedTags";
function SidebarRight() {
  return (
    <div className="mx-auto space-y-10 ">
      <SearchBar />
      <div>
        <h1 className="text-xl pb-2 text-black">FeedTags</h1>
        <FeedTags />
      </div>
      <div>
        <h1 className="text-xl pb-2 text-black">Trending Profiles</h1>
        <TrendingUsers />
      </div>
    </div>
  );
}

export default SidebarRight;
