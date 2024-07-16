import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InteriorDesgin from "./pages/InteriorDesgin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thiet-ke-noi-that" element={<InteriorDesgin />} />
      </Routes>
    </>
  );
}

export default App;
