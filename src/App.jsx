import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InteriorDesign from "./pages/InteriorDesign";
import DetailInteriorDesign from "./pages/DetailInteriorDesign";
import TodoClick from "./pages/TodoList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thiet-ke-noi-that" element={<InteriorDesign />} />
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
