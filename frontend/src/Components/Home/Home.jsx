import React from "react";
import Posts from "./HomeUI/Posts/Posts";
import SidebarLeft from "./HomeUI/SidebarLeft";
import CreatePost from "./HomeUI/Posts/CreatePost";
import Navbar from "./HomeUI/NavBar";
import StoryComp from "./HomeUI/Story/StoryComp";
import SidebarRight from "./HomeUI/SidebarRight";

function Home() {
  return (
    <div className="mx-auto h-screen w-screen">
      <Navbar />
      <div className="my-[4rem] flex">
        {/* Left Content */}
        <div className="w-1/4 p-4  h-screen">
          <h1 className="text-center text-[2.5rem] pt-4">Feeds</h1>

          <div className="overflow-y-auto h-full">
            <SidebarLeft />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-1/2 p-4 space-y-10 overflow-y-auto h-screen">
          <StoryComp />
          <CreatePost />
          <Posts />
        </div>
        {/* Right Content */}
        <div className="w-1/4 p-4  h-screen">
          <div className="overflow-y-auto h-full">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
