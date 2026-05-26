import Header from "../components/Header";

import HeroSection from "../components/Home/hero-section";
import InsurancePartners from "../components/Home/InsurancePartners";
import WhyChooseInsurance from "../components/Home/WhyChooseInsurance";
import TrustStats from "../components/Home/TrustStats";
import HelpSupport from "../components/Home/HelpSupport";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      
      {/* HEADER */}
      <Header />

      <HeroSection />

      <TrustStats />

      <WhyChooseInsurance />

      <InsurancePartners />

      <HelpSupport />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;