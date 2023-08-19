import React from "react";
import SearchBar from "./Search/SearchBar";
import TrendingUsers from "./Trendings/TrendingUsers";
import FeedTags from "./Trendings/FeedTags";
function SidebarRight() {
  return (
    <div className="mx-auto space-y-18 ">
      <SearchBar />
      <FeedTags />
      <TrendingUsers />
    </div>
  );
}

export default SidebarRight;
