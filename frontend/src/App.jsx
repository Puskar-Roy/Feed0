import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import SearchResultsPage from "./Components/Home/HomeUI/Search/SearchResultsPage";
import UserProfile from "./Components/UserProfile/UserProfile";
import NotificationsPage from "./Components/Home/HomeUI/Notifications/NotificationsPage";
import Message from "./Components/Message/Message";
import GlobalProvider from "./Components/Global/GlobalProvider";
import SettingsPage from "./Components/Home/HomeUI/AppSettings/SettingsPage";
function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchresults" element={<SearchResultsPage />} />
          {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
