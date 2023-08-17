import React from "react";
import Posts from "./HomeUI/Posts/Posts";
import SideNav from "./HomeUI/SideNav";
import CreatePost from "./HomeUI/Posts/CreatePost";
import Navbar from "./HomeUI/NavBar";
function Home() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="my-[4rem]">
        <div className="flex">
          <div className="w-1/4 p-4">
            <SideNav />
          </div>

          {/* Main Content */}
          <div className="w-1/2 p-4 space-y-10">
            <CreatePost />
            <Posts />
          </div>

          <div className="w-1/4 p-4">
            <h1>sidenav</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
