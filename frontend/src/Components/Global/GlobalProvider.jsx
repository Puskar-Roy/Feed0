import React from "react";
import NavBar from "../Home/HomeUI/NavBar";
function GlobalProvider({ children }) {
  return (
    <div>
      <NavBar />
      <div className="my-[4rem] mx-auto"></div>
    </div>
  );
}

export default GlobalProvider;
