import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import About from "./pages/main/About";
import Home from "./pages/main/Home";
import Profile from "./pages/main/Profile";
import Settings from "./pages/main/Settings";
import Dashboard from "./pages/main/Dashboard";

import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Messages from "./pages/chat_app/Chat";

import NotFound from "./pages/error/404";

import { ThemeProvider } from "@/components/ui-shadcn/theme-provider";

import "./App.css";

const ProtectedRoute = (props: any) => {
  // let auth={'token': false}
  return props.isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
};

const isAuthenticated = false;

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        {/* Main-application pages */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="chat">
            <Route path="messages" element={<Messages />} />
          </Route>
        </Route>

        {/* Authentication pages */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
