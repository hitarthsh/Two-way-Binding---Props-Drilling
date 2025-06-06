import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Wrapper from "./components/Wrapper.jsx";

// Render the root component inside the React StrictMode wrapper
createRoot(document.getElementById("root")).render(
  <Wrapper>
    <App />
    <ToastContainer position="top-center" />
  </Wrapper>
);