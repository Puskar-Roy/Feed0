import React from "react";
import Posts from "./HomeUI/Posts/Posts";
import SideNav from "./HomeUI/SideNav";
import CreatePost from "./HomeUI/Posts/CreatePost";
function Home() {
  return (
    <div className="my-[8rem]">
      <div className="text-black  text-center mx-auto">
        <h1 className="text-[3rem] font-bold font-mono ">Feed0</h1>

        <p className="text-md">Forums for School / College / University</p>
      </div>
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
  );
}

export default Home;
