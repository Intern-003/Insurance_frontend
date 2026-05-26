import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PaymentPage from "./pages/PaymentPage";
import InsurancePlans from "./pages/InsurancePlans";
import CustomizeInsurancePlan from "./pages/CustomizeInsurancePlan";

import LifeInsuranceForm from "./pages/Insurance/LifeInsuranceForm";
import CarInsuranceForm from "./pages/Insurance/CarInsuranceForm";
import CarInsuranceDetailsForm from "./pages/Insurance/CarInsuranceDetailsForm";
import HealthInsuranceForm from "./pages/Insurance/HealthInsuranceForm";
import BikeInsuranceForm from "./pages/Insurance/BikeInsuranceForm";
import BikeInsuranceDetailsForm from "./pages/Insurance/BikeInsuranceDetailsForm";
import TravelInsuranceForm from "./pages/Insurance/TravelInsuranceForm";
import AirPassForm from "./pages/Insurance/AirPassForm";
import RenewalSelection from "./pages/renewals/RenewalSelection";
import RenewalVerify from "./pages/renewals/RenewalVerify";
import RenewalPolicies from "./pages/renewals/RenewalPolicies";
import RenewalCheckout from "./pages/renewals/RenewalCheckout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PRODUCT */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* PAYMENT */}
        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/insurance-plans" element={<InsurancePlans />} />

        <Route
          path="/customize-insurance-plan"
          element={<CustomizeInsurancePlan />}
        />

        {/* INSURANCE */}
        <Route path="/insurance/life" element={<LifeInsuranceForm />} />

        <Route path="/insurance/car" element={<CarInsuranceForm />} />

        <Route
          path="/car-insurance-details"
          element={<CarInsuranceDetailsForm />}
        />

        <Route path="/insurance/health" element={<HealthInsuranceForm />} />

        <Route path="/insurance/bike" element={<BikeInsuranceForm />} />

        <Route
          path="/bike-insurance-details"
          element={<BikeInsuranceDetailsForm />}
        />

        <Route path="/insurance/travel" element={<TravelInsuranceForm />} />

        <Route path="/insurance/airpass" element={<AirPassForm />} />

        <Route path="/renewals" element={<RenewalSelection />} />

        <Route path="/renewals/:type" element={<RenewalVerify />} />

        <Route path="/renewals/:type/policies" element={<RenewalPolicies />}/>

<Route
  path="/renewals/:type/checkout"
  element={<RenewalCheckout />}
/>
      </Routes>
    </>
  );
}

export default App;
