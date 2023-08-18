import React from "react";
import Posts from "./HomeUI/Posts/Posts";
import Sidebar from "./HomeUI/Sidebar";
import CreatePost from "./HomeUI/Posts/CreatePost";
import Navbar from "./HomeUI/NavBar";
import StoryComp from "./HomeUI/Story/StoryComp";

function Home() {
  return (
    <div className="mx-auto h-screen w-screen">
      <Navbar />
      <div className="my-[4rem] flex">
        {/* Left Content */}
        <div className="w-1/4 p-4  h-screen">
          <h1 className="text-center text-[2.5rem] pt-4">Feeds</h1>

          <div className="overflow-y-auto h-full">
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-1/2 p-4 space-y-10 overflow-y-auto h-screen">
          <StoryComp />
          <CreatePost />
          <Posts />
        </div>
        {/* Right Content */}
        <div className="w-1/4 p-4   overflow-y-auto h-screen">
          <h1>sidenav</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
