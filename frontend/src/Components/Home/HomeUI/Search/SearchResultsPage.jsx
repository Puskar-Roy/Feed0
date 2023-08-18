import React from "react";
import { useLocation } from "react-router-dom";

function SearchResultsPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || {};

  return (
    <div className="mx-auto mx-6">
      <h1 className="text-center text-md text-black">Search Results</h1>
      <ul>
        <li> {searchResults.userProfiles?.length || 0}</li>
        <li> {searchResults.serversGroups?.length || 0}</li>
        <li> {searchResults.posts?.length || 0}</li>
        <li> {searchResults.feedTags?.length || 0}</li>
      </ul>
    </div>
  );
}

export default SearchResultsPage;
