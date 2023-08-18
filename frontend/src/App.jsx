import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SearchResultsPage from "./Components/Home/HomeUI/Search/SearchResultsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchresults" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
