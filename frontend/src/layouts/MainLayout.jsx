import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div className="app-container">
      <Routes>
        {/* This tells the app to load your Home page at the root URL */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainLayout;