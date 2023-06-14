import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <About />
      <Navbar />
      <Tech />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
