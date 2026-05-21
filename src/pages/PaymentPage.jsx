// src/pages/PaymentPage.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Shield, Pencil, CreditCard, Lock, Loader2, X } from "lucide-react";

import QRCode from "qrcode";

import Header from "../components/Header";
import Footer from "../components/Footer";

const PaymentPage = () => {
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState(null);

  const [amount, setAmount] = useState("");

  const [editing, setEditing] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);

  const [showQRModal, setShowQRModal] = useState(false);

  const [qrImage, setQrImage] = useState("");

  const [upiLink, setUpiLink] = useState("");

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // LOAD DATA
  useEffect(() => {
    const storedData = sessionStorage.getItem("insurancePaymentData");

    if (!storedData) {
      navigate("/");
      return;
    }

    const parsedData = JSON.parse(storedData);

    setPaymentData(parsedData);

    setAmount(parsedData.product.premium);
  }, [navigate]);

  // PAYMENT
  const handlePayment = async () => {
    try {
      setIsProcessing(true);

      const orderId = "ORD" + Date.now() + Math.floor(Math.random() * 10000);

      const formData = new FormData();

      formData.append("token", "ahg7muIv5jwZuGQfeVKUIjM3q2cApI");

      formData.append("orderid", orderId);

      formData.append("amount", String(amount));

      formData.append("email", paymentData.customer.email);

      formData.append("phone", paymentData.customer.phone);

      formData.append(
        "name",
        `${paymentData.customer.firstName} ${paymentData.customer.lastName}`,
      );

      // PAYMENT REQUEST
      const response = await fetch(
        "https://uatfintech.spay.live/api/payin/upi/request",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      console.log("PAYMENT RESPONSE:", data);

      // SAVE ORDER ID
      sessionStorage.setItem("spayOrderId", orderId);

      // QR STRING
      const qrString =
        data?.data?.qrcode_string ||
        data?.qrcode_string ||
        data?.payment_url ||
        data?.data?.payment_url ||
        data?.upiurl;

      if (!qrString) {
        alert("QR not generated");
        setIsProcessing(false);
        return;
      }

      // GENERATE QR IMAGE
      const qrDataUrl = await QRCode.toDataURL(qrString);

      setQrImage(qrDataUrl);

      setUpiLink(qrString);

      setShowQRModal(true);

      setIsProcessing(false);
    } catch (error) {
      console.log(error);

      alert("Payment failed");

      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (!showQRModal) return;

    const interval = setInterval(async () => {
      try {
        const orderId = sessionStorage.getItem("spayOrderId");

        if (!orderId) return;

        const formData = new FormData();

        formData.append("token", "ahg7muIv5jwZuGQfeVKUIjM3q2cApI");

        formData.append("orderid", orderId);

        // STATUS API
        const response = await fetch(
          "https://uatfintech.spay.live/api/payin/status",
          {
            method: "POST",
            body: formData,
          },
        );

        const data = await response.json();

        console.log("STATUS:", data);

        if (
          data.status === "SUCCESS" ||
          data.status === "success" ||
          data.txnstatus === "SUCCESS" ||
          data.txnstatus === "success" ||
          data.payment_status === "SUCCESS"
        ) {
          clearInterval(interval);

          sessionStorage.removeItem("spayOrderId");

          setPaymentSuccess(true);

          setTimeout(() => {
            alert("Payment Successful ✅");

            navigate("/");
          }, 2000);
        }

        if (data.status === "FAILED" || data.status === "failed") {
          clearInterval(interval);

          alert("Payment Failed ❌");

          setShowQRModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [showQRModal, navigate]);

  // LOADING
  if (!paymentData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />

      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Complete Your Purchase
          </h1>

          <p className="mt-2 text-base text-gray-600">
            Review your details and proceed to payment
          </p>
        </div>

        {/* ORDER SUMMARY */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
          {/* Title */}
          <div className="mb-6 flex items-center gap-3">
            <Shield className="h-5 w-5 text-[#006b54]" />

            <h2 className="text-2xl font-semibold text-gray-900">
              Order Summary
            </h2>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-6 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {paymentData.product.name}
              </h3>

              <p className="mt-1 text-[15px] text-gray-500">
                {paymentData.product.company}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <h3 className="text-2xl font-bold text-gray-900">
                ₹{paymentData.product.premium}
                /month
              </h3>

              <p className="mt-1 text-[15px] text-gray-500">
                Coverage: {paymentData.product.coverageAmount}
              </p>
            </div>
          </div>

          {/* Amount */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Payment Amount
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Click the pencil icon to modify payment amount
              </p>
            </div>

            <div className="flex items-center gap-4">
              {editing ? (
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-10 w-32 rounded-xl border border-gray-200 px-4 text-right text-2xl font-bold outline-none focus:border-[#006b54]"
                />
              ) : (
                <span className="text-3xl font-bold text-[#006b54]">
                  ₹{amount}
                </span>
              )}

              <button
                onClick={() => setEditing(!editing)}
                className="text-gray-700 transition hover:text-[#006b54]"
              >
                <Pencil className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* CUSTOMER DETAILS */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
          <h2 className="text-2xl font-semibold text-gray-900">
            Customer Details
          </h2>

          <div className="mt-7 grid gap-7 sm:grid-cols-2">
            {/* Left */}
            <div className="space-y-4">
              <p className="text-[15px] text-gray-600">
                Name:{" "}
                <span className="font-semibold text-gray-900">
                  {paymentData.customer.firstName}{" "}
                  {paymentData.customer.lastName}
                </span>
              </p>

              <p className="text-[15px] text-gray-600">
                Phone:{" "}
                <span className="font-semibold text-gray-900">
                  +91
                  {paymentData.customer.phone}
                </span>
              </p>

              <p className="text-[15px] text-gray-600">
                Gender:{" "}
                <span className="font-semibold text-gray-900">
                  {paymentData.customer.gender}
                </span>
              </p>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <p className="text-[15px] text-gray-600">
                Email:{" "}
                <span className="font-semibold text-gray-900">
                  {paymentData.customer.email}
                </span>
              </p>

              <p className="text-[15px] text-gray-600">
                Age:{" "}
                <span className="font-semibold text-gray-900">
                  {paymentData.customer.age} years
                </span>
              </p>

              <p className="text-[15px] text-gray-600">
                City:{" "}
                <span className="font-semibold text-gray-900">
                  {paymentData.customer.city}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="mt-6 rounded-2xl border border-[#dcefe8] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
          {/* Secure */}
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Lock className="h-4 w-4" />

            <span className="text-base">Secure payment powered by Spay</span>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#006b54] text-base font-semibold tracking-wide text-white transition hover:opacity-90 disabled:opacity-70"
          >
            <CreditCard className="h-5 w-5" />

            {isProcessing ? "Processing..." : `Pay ₹${amount}`}
          </button>

          {/* Methods */}
          <div className="mt-6 flex items-center justify-center gap-7 text-sm text-gray-500">
            <span>UPI</span>

            <span>Cards</span>

            <span>Net Banking</span>

            <span>Wallets</span>
          </div>
        </div>

        {/* Back */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-base text-gray-600 transition hover:text-[#006b54]"
          >
            Go back and edit details
          </button>
        </div>
      </div>

      {/* QR MODAL */}
      {showQRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            {/* CLOSE */}
            <button
              onClick={() => {
                setShowQRModal(false);
              }}
              className="absolute right-4 top-4 text-gray-400 hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-5 text-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Scan & Pay</h2>

                <p className="mt-2 text-sm text-gray-500">
                  Complete payment using any UPI app
                </p>
              </div>

              {/* QR */}
              <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white p-4">
                <img src={qrImage} alt="QR" className="mx-auto h-64 w-64" />
              </div>

              {/* Amount */}
              <div>
                <p className="text-sm text-gray-500">Amount</p>

                <h3 className="mt-1 text-3xl font-bold text-[#006b54]">
                  ₹{amount}
                </h3>
              </div>

              {/* Copy */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(upiLink);

                  alert("UPI Link Copied");
                }}
                className="text-sm font-medium text-blue-600 underline"
              >
                Copy UPI Link
              </button>

              {/* Waiting */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                Waiting for payment...
              </div>
            </div>
          </div>
        </div>
      )}
      {/* SUCCESS */}
      {paymentSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <span className="text-4xl">✅</span>
            </div>

            <h2 className="text-2xl font-bold text-green-600">
              Payment Successful
            </h2>

            <p className="mt-2 text-sm text-gray-500">Redirecting...</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PaymentPage;
