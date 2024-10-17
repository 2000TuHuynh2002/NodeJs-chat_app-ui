import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import About from "./pages/main/About";
import Home from "./pages/main/Home";
import Profile from "./pages/main/Profile";
import Settings from "./pages/main/Settings";

import Dashboard from "./pages/chat_app/Dashboard";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout/>} >
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="chat">
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
