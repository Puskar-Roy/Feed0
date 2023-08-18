import React from "react";
import { useLocation } from "react-router-dom";

function SearchResultsPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || {};

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">User Profiles</h2>
          <ul>
            {searchResults.userProfiles?.map((profile) => (
              <li key={profile.id}>{profile.name}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Feeds</h2>
          <ul>
            {searchResults.serversGroups?.map((group) => (
              <li key={group.id}>{group.name}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Posts</h2>
          <ul>
            {searchResults.posts?.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Feed Tags</h2>
          <ul>
            {searchResults.feedTags?.map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsPage;
