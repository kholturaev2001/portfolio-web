import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import ChangeLang from "./components/ChangeLang/ChangeLang";

const App = () => {
  return (
    <div>
      <ChangeLang />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
