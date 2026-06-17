import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PaymentPage from "./pages/PaymentPage";
import InsurancePlans from "./pages/InsurancePlans";
import CustomizeInsurancePlan from "./pages/CustomizeInsurancePlan";
import MainLayout from "./layouts/MainLayout";
import HelpCenter from "./pages/support/HelpCenter";
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

/* COMPANY */
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import ContactUs from "./pages/company/ContactUs";

/* RESOURCES */
import Resources from "./pages/resources/Resources";
import CustomerStories from "./pages/resources/CustomerStories";
import Articles from "./pages/resources/Articles";
import Ebooks from "./pages/resources/Ebooks";

/* LEGAL */
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsConditions from "./pages/legal/TermsConditions";
import FinancialDisclosures from "./pages/legal/FinancialDisclosures";

import CarProposalForm from "./pages/proposals/CarProposalForm";
import BikeProposalForm from "./pages/proposals/BikeProposalForm";
import HealthProposalForm from "./pages/proposals/HealthProposalForm";
import LifeProposalForm from "./pages/proposals/LifeProposalForm";
import TravelProposalForm from "./pages/proposals/TravelProposalForm";

/* Admin Imports */
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import Plans from "./pages/admin/Plans";
import Proposals from "./pages/admin/Proposals";
import PlanForm from "./components/admin/PlanForm";
import PrivateRoute from "./components/PrivateRoute";
import Renewals from "./pages/admin/Renewals";

import Razorpay from "./pages/razorpay";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* INSURANCE FORMS */}
        <Route path="/insurance/car" element={<CarInsuranceForm />} />
        <Route path="/insurance/health" element={<HealthInsuranceForm />} />
        <Route path="/insurance/bike" element={<BikeInsuranceForm />} />
        <Route path="/insurance/travel" element={<TravelInsuranceForm />} />
        <Route path="/insurance/airpass" element={<AirPassForm />} />
        <Route path="/insurance/life" element={<LifeInsuranceForm />} />

        <Route
          path="/car-insurance-details"
          element={<CarInsuranceDetailsForm />}
        />
        <Route
          path="/bike-insurance-details"
          element={<BikeInsuranceDetailsForm />}
        />

        {/* RENEWALS */}
        <Route path="/renewals" element={<RenewalVerify />} />
        <Route path="/renewals/policies" element={<RenewalPolicies />} />
        <Route path="/renewals/checkout" element={<RenewalCheckout />} />

        {/* PROPOSALS */}
        <Route path="/proposal/car" element={<CarProposalForm />} />
        <Route path="/proposal/bike" element={<BikeProposalForm />} />
        <Route path="/proposal/health" element={<HealthProposalForm />} />
        <Route path="/proposal/life" element={<LifeProposalForm />} />
        <Route path="/proposal/travel" element={<TravelProposalForm />} />

        <Route path="/razorpay" element={<Razorpay />} />

        {/* SUCCESS */}
        <Route path="/policy-success" element={<PolicySuccessPage />} />

        {/* PAGES USING MAINLAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/insurance-plans" element={<InsurancePlans />} />
          <Route
            path="/customize-insurance-plan"
            element={<CustomizeInsurancePlan />}
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/customer-stories" element={<CustomerStories />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route
            path="/financial-disclosures"
            element={<FinancialDisclosures />}
          />
          <Route path="/help-center" element={<HelpCenter />} />
        </Route>

        {/* ADMIN LOGIN - Public Route */}
        <Route path="/admin/login" element={<Login />} />

        {/* ADMIN ROUTES - Protected */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="plans" element={<Plans />} />
            <Route path="plans/new" element={<PlanForm />} />
            <Route path="plans/:id/edit" element={<PlanForm />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="renewals" element={<Renewals />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
