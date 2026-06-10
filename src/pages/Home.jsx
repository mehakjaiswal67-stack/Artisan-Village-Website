import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import ProductCards from "../components/ProductCards";
import GiftSection from "../components/GiftSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <ProductCards />
      <GiftSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;