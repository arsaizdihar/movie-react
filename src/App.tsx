import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Wishlist from "./components/Wishlist";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/movie-react" element={<Home />} />
          <Route path="/movie-react/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
