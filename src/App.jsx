import { useState } from "react";

import Navbar from "./component/Navbar/Navbar.jsx";
import Hero from "./component/Hero/Hero.jsx";
import Programs from "./component/Programs/Programs.jsx";
import Title from "./component/Title/Title.jsx";
import About from "./component/About/About.jsx";
import Campus from "./component/Campus/Campus.jsx";
import Testimonial from "./component/Testimonial/Testimonial.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="our program" title="What We Offer" />
        <Programs />
        <About />
        <Title subTitle="Gallary" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonial />
      </div>
    </div>
  );
}

export default App;
