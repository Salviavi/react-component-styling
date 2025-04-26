import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Logo2 from "./assets/Logo2.png";
import SunflowerCoffee from "./assets/Sunflower_Coffee.jpg";
import Images from "./assets/Images.jpeg";
import Image2 from "./assets/Image2.jpg";
import Image3 from "./assets/Image3.jpg";
import Image4 from "./assets/Image4.jpg";
import Image1 from "./assets/Image1.jpg";
import Image5 from "./assets/Image5.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
