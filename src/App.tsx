import { Routes, Route, Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { openDB } from "idb";

import { ThemeProvider } from "@/components/ui-shadcn/theme-provider";

import MainLayout from "@/layouts/MainLayout";
import Container from "@/components/shared/Container";
import About from "@/pages/main/About";
import Home from "@/pages/main/Home";
import Profile from "@/pages/main/Profile";
import Settings from "@/pages/main/Settings";
import Dashboard from "@/pages/main/Dashboard";
import Messages from "@/pages/chat_app/Chat";

import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import NotFound from "@/pages/error/404";

import { apiRefresh } from "@/api/auth.api";
import { isCookieExist } from "@/utils/cookie.utils";

import "@/App.css";

await openDB("chat_app", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("messages")) {
      db.createObjectStore("messages", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  },
});

if (isCookieExist("isLoggedIn") && !sessionStorage.getItem("accessToken")) {
  try {
    await apiRefresh();
  } catch (error) {
    console.error("Failed to get access token:", error);
  }
}

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isAuthenticated);
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};

const AuthRoute = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isAuthenticated);
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        {/* Main-application pages */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route element={<Container />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="chat">
              <Route path="messages" element={<Messages />} />
            </Route>
          </Route>
        </Route>

        {/* Authentication pages */}
        <Route element={<AuthRoute />}>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

        {/* Error pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
