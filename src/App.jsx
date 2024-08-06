import "./App.css";
import Header from "./components/Header";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Home from "./pages/Home";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import ListBanner from "./components/ListBanner";
import ContentMain from "./components/ContentMain";

function App() {
  const title = "Đây là trang HOME";
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
      <ListBanner />
      <ContentMain />

      <Routes>
        <Route path="/" element={<Home title={title} />} />
      </Routes>
    </>
  );
}

export default App;
