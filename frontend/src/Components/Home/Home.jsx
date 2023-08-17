import React from "react";
import Posts from "./HomeUI/Posts/Posts";
import SideNav from "./HomeUI/SideNav";
import CreatePost from "./HomeUI/Posts/CreatePost";
import Navbar from "./HomeUI/NavBar";
import StoryComp from "./HomeUI/Story/StoryComp";

function Home() {
  return (
    <div className="mx-auto h-screen">
      <Navbar />
      <div className="my-[4rem] ">
        <div className="flex">
          {/* Left Content */}
          <div className="w-1/4 p-4 overflow-y-auto h-screen">
            <SideNav />
          </div>

          {/* Main Content */}
          <div className="w-1/2 p-4 space-y-10 overflow-y-auto">
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
    </div>
  );
}

export default Home;
