import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Categories from "./components/Categories/Categories";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Shop from "./components/Shop/Shop";
import Location from "./components/Location/Location";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Shop />
        <Benefits />
        <Categories />
        <Featured />
        <Location />
      </main>

      <Footer />
    </>
  );
}