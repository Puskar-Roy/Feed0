import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const searchResults = await performSearch(searchTerm);

    history.push("/searchresults", { searchResults });
  };

  const performSearch = async (searchTerm) => {
    //  different types of search results
    // Replace with actual API calls
    const userProfiles = await fetchUserProfiles(searchTerm);
    const serversGroups = await fetchServersGroups(searchTerm);
    const posts = await fetchPosts(searchTerm);
    const feedTags = await fetchFeedTags(searchTerm);

    return {
      userProfiles,
      serversGroups,
      posts,
      feedTags,
    };
  };

  const fetchUserProfiles = async (searchTerm) => {
    //  fetching user profiles
    // Replace with actual API call
    return [];
  };

  const fetchServersGroups = async (searchTerm) => {
    //  fetching servers/groups
    // Replace with actual API call
    return [];
  };

  const fetchPosts = async (searchTerm) => {
    //  fetching posts
    // Replace with actual API call
    return [];
  };

  const fetchFeedTags = async (searchTerm) => {
    //  fetching feed tags
    // Replace with actual API call
    return [];
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-blue-400 transition duration-300"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
