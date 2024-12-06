import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { StrictMode } from "react";

import App from "./App.tsx";
import store from "@/lib/redux/store.ts";

import "./assets/styles/normalize.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
