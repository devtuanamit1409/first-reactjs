import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InteriorDesgin from "./pages/InteriorDesgin";
import DetailInteriorDesign from "./pages/DetailInteriorDesign";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thiet-ke-noi-that" element={<InteriorDesgin />} />
        <Route
          path="/thiet-ke-noi-that/:slug"
          element={<DetailInteriorDesign />}
        />
      </Routes>
    </>
  );
}

export default App;
