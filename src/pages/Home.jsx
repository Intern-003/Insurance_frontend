// src/pages/Home.jsx

import HeroSection from "../components/Home/hero-section";
import ProductsGrid from "../components/ProductsGrid";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import InsurancePartners from "../components/Home/InsurancePartners";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductsGrid />
      <WhyChooseUs />
      <InsurancePartners />
      <Footer />
    </div>
  );
};

export default Home;
