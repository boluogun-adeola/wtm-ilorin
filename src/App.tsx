import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Initiatives from "./pages/initiatives";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/initiatives" element={<Initiatives />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
