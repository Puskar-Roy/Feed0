import React from "react";
import NavBar from "../Home/HomeUI/NavBar";
function GlobalProvider({ children }) {
  return (
    <div>
      <NavBar />
      <div className="my-[4rem] mx-auto">{children}</div>
    </div>
  );
}

export default GlobalProvider;
