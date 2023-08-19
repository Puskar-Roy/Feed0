import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import SearchResultsPage from "./Components/Home/HomeUI/Search/SearchResultsPage";
import UserProfile from "./Components/UserProfile/UserProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchresults" element={<SearchResultsPage />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
