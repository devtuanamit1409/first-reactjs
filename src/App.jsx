import "./assets/styles/App.css";
import Header from "./components/layouts/Header";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Home from "./pages/Home";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import Footer from "./components/layouts/Footer";
import Detail from "./pages/Detail";
import Blog from "./pages/Blog";

function App() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    // Set the progress to 30% when navigation starts
    setProgress(30);

    // Simulate loading completion
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500); // Adjust time according to your need

    // Clean up the timer on component unmount or location change
    return () => {
      clearTimeout(timer);
    };
  }, [location, navigationType]);
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Detail />} />
        <Route path="/tin-tuc" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
