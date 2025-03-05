import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Loader from "./Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Get current route

  // Dynamic loading text based on the route
  const getLoadingText = () => {
    if (location.pathname === "/") return "NASA Astronomy Home";
    if (location.pathname.startsWith("/detail")) return "NASA Astronomy Details";
    if (location.pathname === "/favorites") return "NASA Astronomy Favorite";
    return "Loading..."; // Default fallback
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [location.pathname]); // Reset loading on route change

  return loading ? (
    <Loader loadingText={getLoadingText()} />
  ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home setLoading={setLoading} />} />
        <Route path="/detail/:imageUrl" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
