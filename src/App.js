import React from "react";
import "./App.css";
import FoodMenu from "./pages/FoodMenu/index.js";
import Header from "./components/Header";
import Menu from "./components/Menu";
import HeroImage from "./components/HeroImage";
import About from "./pages/About";
import Master from "./pages/Master";
import Footer from "./pages/Footer";
import TriangleYellow from "./components/TriangleYellow";
import TriangleGreen from "./components/TriangleGreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <HeroImage />
      <h2 className="menu-header"> Meny</h2>
      <FoodMenu />
      <TriangleGreen />
      <Master />
      <TriangleYellow />
      <About />

      <Footer />
    </div>
  );
}

export default App;
