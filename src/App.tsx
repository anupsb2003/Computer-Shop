import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Benefits from "./components/Benefits/Benefits";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";

import "./App.css";
import Shop from "./components/Shop/Shop";
import Location from "./components/Location/Location";
import CardUI from "./components/CardUI/CardUI";
import GoogleReviews from "./components/GoogleReviews/GoogleReviews";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Shop />
        <CardUI />
        <Benefits />
        <Featured />
        <Location />
        <GoogleReviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
}