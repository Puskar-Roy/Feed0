import React from "react";
import Posts from "./HomeUI/Posts/Posts";
function Home() {
  return (
    <div className="my-[8rem]">
      <div className="text-black  text-center mx-auto">
        <h1 className="text-[3rem] font-bold font-mono ">Feed0</h1>

        <p className="text-md">Forums for School / College / University</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
        <div>
          <h1>sidenav</h1>
        </div>
        <div className="mx-auto">
          <Posts />
        </div>
        <div>
          <h1>sidenav</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
