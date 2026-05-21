// src/pages/ProductDetails.jsx

import { useParams } from "react-router-dom";
import { ArrowLeft, Check, Shield, Building2, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import insuranceProducts from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = insuranceProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="rounded-2xl border border-gray-200 bg-white px-8 py-10 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">
            Product Not Found
          </h1>

          <a
            href="/"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#006b54] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  // ADD THIS ABOVE RETURN

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // First Name
    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last Name
    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Mobile
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit Indian mobile number";
    }

    // Age
    if (!formData.age || Number(formData.age) < 18) {
      newErrors.age = "Age must be at least 18";
    }

    // Gender
    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    // City
    if (!formData.city) {
      newErrors.city = "Required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    // STORE DATA
    const paymentData = {
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.mobile,
        age: formData.age,
        gender: formData.gender,
        city: formData.city,
      },

      product: {
        id: product.id,
        name: product.name,
        company: product.company,
        premium: product.premium,
        coverageAmount: product.coverageAmount,
      },

      transactionRef: "TXN" + Date.now(),
    };

    sessionStorage.setItem("insurancePaymentData", JSON.stringify(paymentData));

    // REDIRECT
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Header />

      {/* Top Bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <a
            href="/#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#006b54]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Plans
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT */}
          <div className="space-y-6 lg:col-span-2">
            {/* Header */}
            <div>
              <span className="rounded-full bg-[#eef7f3] px-3 py-1 text-xs font-semibold capitalize tracking-wide text-[#006b54]">
                {product.type}
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-2 text-gray-500">
                <Building2 className="h-4 w-4" />

                <span className="text-base">{product.company}</span>
              </div>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                {product.description}
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-medium text-gray-500">
                  Coverage Amount
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#006b54]">
                  {product.coverageAmount}
                </h2>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-medium text-gray-500">
                  Monthly Premium
                </p>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
                  ₹{product.premium}
                </h2>
              </div>
            </div>

            {/* Features */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <div className="mb-8 flex items-center gap-3">
                <Shield className="h-5 w-5 text-[#006b54]" />

                <h2 className="text-2xl font-semibold text-gray-900">
                  Coverage Features
                </h2>
              </div>

              <ul className="grid gap-5 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[#006b54]" />

                    <span className="text-[15px] leading-7 text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
              <div className="mb-8 flex items-center gap-3">
                <Star className="h-5 w-5 text-[#006b54]" />

                <h2 className="text-2xl font-semibold text-gray-900">
                  Key Highlights
                </h2>
              </div>

              <ul className="space-y-5">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#eef7f3] text-sm font-semibold text-[#006b54]">
                      {index + 1}
                    </div>

                    <span className="text-[15px] leading-7 text-gray-600">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
              {/* Top */}
              <div className="border-b border-gray-200 bg-[#f6faf8] px-7 py-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Buy This Plan
                </h2>

                <p className="mt-2 text-sm text-gray-600">
                  ₹{product.premium}/month for {product.coverageAmount} coverage
                </p>
              </div>

              {/* Form */}
              <div className="p-7">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Your Details
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Fill in your details to purchase {product.name}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Names */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        First Name
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        className={`h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-gray-200 focus:border-[#006b54]"
                        }`}
                      />

                      {errors.firstName && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Last Name
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        className={`h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition ${
                          errors.lastName
                            ? "border-red-500"
                            : "border-gray-200 focus:border-[#006b54]"
                        }`}
                      />

                      {errors.lastName && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#006b54]"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>

                    <div className="flex">
                      <div className="flex h-11 items-center rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 px-4 text-sm text-gray-500">
                        +91
                      </div>

                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className={`h-11 w-full rounded-r-xl border bg-white px-4 text-sm outline-none transition ${
                          errors.mobile
                            ? "border-red-500"
                            : "border-gray-200 focus:border-[#006b54]"
                        }`}
                      />
                    </div>
                    {errors.mobile && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Age + Gender */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Age
                      </label>

                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        className={`h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition ${
                          errors.age
                            ? "border-red-500"
                            : "border-gray-200 focus:border-[#006b54]"
                        }`}
                      />

                      {errors.age && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.age}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">
                        Gender
                      </label>

                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition ${
                          errors.gender
                            ? "border-red-500"
                            : "border-gray-200 focus:border-[#006b54]"
                        }`}
                      >
                        <option value="">Select gender</option>

                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>

                      {errors.gender && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.gender}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      City
                    </label>

                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition ${
                        errors.city
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#006b54]"
                      }`}
                    >
                      <option value="">Select your city</option>

                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                    </select>

                    {errors.city && (
                      <p className="mt-2 text-sm text-red-500">{errors.city}</p>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center rounded-xl bg-[#006b54] text-sm font-semibold tracking-wide text-white transition hover:opacity-90"
                  >
                    Proceed to Payment
                  </button>

                  <p className="text-center text-xs leading-6 text-gray-500">
                    By proceeding, you agree to our Terms of Service and Privacy
                    Policy. Your data is secure and encrypted.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
