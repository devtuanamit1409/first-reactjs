import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// router -> điều hướng , định tuyến
// BrowserRouter -> đóng gói toàn bộ ứng dụng
