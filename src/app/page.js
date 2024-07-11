
import Navbar from "./components/Header";
import Hero from "./components/Hero";

import ProductCard from "./components/Product";
import AddSection from "./components/Add/AddSection";
import Testimonial from "./components/Testimonial";
import End from "./components/End";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductCard />
      <AddSection />
      <Testimonial />
      <End />
      <Footer/>
    </>
  );
}
