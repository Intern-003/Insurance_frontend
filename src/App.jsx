import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PaymentPage from "./pages/PaymentPage";
import InsurancePlans from "./pages/InsurancePlans";
import CustomizeInsurancePlan from "./pages/CustomizeInsurancePlan";

import PolicySuccessPage from "./pages/Insurance/PolicySuccessPage";

import LifeInsuranceForm from "./pages/Insurance/LifeInsuranceForm";
import CarInsuranceForm from "./pages/Insurance/CarInsuranceForm";
import CarInsuranceDetailsForm from "./pages/Insurance/CarInsuranceDetailsForm";
import HealthInsuranceForm from "./pages/Insurance/HealthInsuranceForm";
import BikeInsuranceForm from "./pages/Insurance/BikeInsuranceForm";
import BikeInsuranceDetailsForm from "./pages/Insurance/BikeInsuranceDetailsForm";
import TravelInsuranceForm from "./pages/Insurance/TravelInsuranceForm";
import AirPassForm from "./pages/Insurance/AirPassForm";

import RenewalVerify from "./pages/renewals/RenewalVerify";
import RenewalPolicies from "./pages/renewals/RenewalPolicies";
import RenewalCheckout from "./pages/renewals/RenewalCheckout";

import CheckoutPage from "./pages/checkout/CheckoutPage";

import ScrollToTop from "./components/ScrollToTop";

import CarProposalForm from "./pages/proposals/CarProposalForm";
import BikeProposalForm from "./pages/proposals/BikeProposalForm";
import HealthProposalForm from "./pages/proposals/HealthProposalForm";
import LifeProposalForm from "./pages/proposals/LifeProposalForm";
import TravelProposalForm from "./pages/proposals/TravelProposalForm";

function App() {

  return (
    <>
      <ScrollToTop />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* PRODUCT */}

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* PAYMENT */}

        <Route
          path="/payment"
          element={<PaymentPage />}
        />

        {/* INSURANCE PLANS */}

        <Route
          path="/insurance-plans"
          element={<InsurancePlans />}
        />

        <Route
          path="/customize-insurance-plan"
          element={<CustomizeInsurancePlan />}
        />

        {/* INSURANCE FORMS */}

        <Route
          path="/insurance/life"
          element={<LifeInsuranceForm />}
        />

        <Route
          path="/insurance/car"
          element={<CarInsuranceForm />}
        />

        <Route
          path="/car-insurance-details"
          element={<CarInsuranceDetailsForm />}
        />

        <Route
          path="/insurance/health"
          element={<HealthInsuranceForm />}
        />

        <Route
          path="/insurance/bike"
          element={<BikeInsuranceForm />}
        />

        <Route
          path="/bike-insurance-details"
          element={<BikeInsuranceDetailsForm />}
        />

        <Route
          path="/insurance/travel"
          element={<TravelInsuranceForm />}
        />

        <Route
          path="/insurance/airpass"
          element={<AirPassForm />}
        />

        {/* RENEWALS */}

        <Route
          path="/renewals"
          element={<RenewalVerify />}
        />

        <Route
          path="/renewals/policies"
          element={<RenewalPolicies />}
        />

        <Route
          path="/renewals/checkout"
          element={<RenewalCheckout />}
        />

        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

        {/* PROPOSALS */}

        <Route
          path="/proposal/car"
          element={<CarProposalForm />}
        />

        <Route
          path="/proposal/bike"
          element={<BikeProposalForm />}
        />

        <Route
          path="/proposal/health"
          element={<HealthProposalForm />}
        />

        <Route
          path="/proposal/life"
          element={<LifeProposalForm />}
        />

        <Route
          path="/proposal/travel"
          element={<TravelProposalForm />}
        />

        {/* SUCCESS */}

        <Route
          path="/policy-success"
          element={<PolicySuccessPage />}
        />

      </Routes>
    </>
  );
}

export default App;