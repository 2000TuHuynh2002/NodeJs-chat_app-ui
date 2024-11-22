import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/main/About";
import Home from "./pages/main/Home";
import Profile from "./pages/main/Profile";
import Settings from "./pages/main/Settings";
import Dashboard from "./pages/main/Dashboard";

import Login from "./pages/auth/Login";

import Messages from "./pages/chat_app/Chat";

import { ThemeProvider } from "@/components/ui-shadcn/theme-provider"

import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="" element={<MainLayout/>} >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="auth">
          <Route path="login" element={<Login />}></Route>
        </Route>

        <Route path="chat">
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
