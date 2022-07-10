import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Header />
        <Hero />
      </div>
      <Main />
      <Testimonials />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
