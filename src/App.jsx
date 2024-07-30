import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InteriorDesign from "./pages/InteriorDesign";
import DetailInteriorDesign from "./pages/DetailInteriorDesign";
import TodoClick from "./pages/TodoList";

function App() {
  const title = "Đây là trang HOME";
  const title2 = "Đây là trang thiết kế nội thất";
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home title={title} />} />
        <Route
          path="/thiet-ke-noi-that"
          element={<InteriorDesign title={title2} />}
        />
        <Route
          path="/thiet-ke-noi-that/:slug"
          element={<DetailInteriorDesign />}
        />
        <Route path="/to-do-list" element={<TodoClick />} />
      </Routes>
    </>
  );
}

export default App;
