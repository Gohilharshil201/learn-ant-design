import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css"; // Ant Design styles
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
