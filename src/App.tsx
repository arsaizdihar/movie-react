import React from "react";
import "./App.css";
import Home from "./components/Home";
import ModalProvider from "./contexts/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}

export default App;
