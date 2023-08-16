import React from "react";
import PostComp from "./PostComp";
const dummyPosts = [
  {
    id: 1,
    user: {
      name: "Feed0 Official",
      profilePicture: "profile-pic-url",
      timestamp: "2 hours ago",
    },
    content: " feed0 updated to v1.1",
    likes: 10,
    comments: [
      { id: 1, text: "Great post!", user: "IronMan" },
      { id: 2, text: "I agree!", user: "Hulk" },
    ],
  },
  // Add more posts...
];

function Posts() {
  return (
    <div>
      <PostComp posts={dummyPosts} />
    </div>
  );
}

export default Posts;
