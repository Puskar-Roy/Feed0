import React from "react";
import Posts from "./HomeUI/Posts/Posts";
import SidebarLeft from "./HomeUI/SidebarLeft";
import CreatePost from "./HomeUI/Posts/CreatePost";
import Navbar from "./HomeUI/NavBar";
import StoryComp from "./HomeUI/Story/StoryComp";
import SidebarRight from "./HomeUI/SidebarRight";

function Home() {
  return (
    <div className="mx-auto h-screen w-screen no-scrollbar">
      <div className=" flex">
        {/* Left Content */}
        <div className="w-1/4 p-4  h-screen">
          <h1 className="text-2xl pt-4 pb-2 text-black">Feeds</h1>
          <div className="overflow-y-auto h-full p-2 outline outline-gray-300 rounded-lg">
            <SidebarLeft />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-1/2 p-4 space-y-10 overflow-y-auto h-screen no-scrollbar">
          <StoryComp />
          <CreatePost />
          <Posts />
        </div>
        {/* Right Content */}
        <div className="w-1/4 p-4  h-screen">
          <div className=" h-full my-6 mb-12 ">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
