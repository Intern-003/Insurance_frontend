import React, { useMemo } from "react";
import { useEffect } from "react";

import {
  ShieldCheck,
  FileText,
  Lock,
  User,
  Shield,
  Receipt,
  CalendarDays,
  QrCode,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { usePost } from "../../hooks/usePost";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const proposal = location.state?.proposal || {};

  const renewal = location.state?.renewal || false;

  const renewalData =
    location.state?.renewalData || location.state?.proposal || null;

  const { postData, loading } = usePost();

  const premium = Number(proposal?.premium_amount || 0);
  const gst = Math.round((premium * 18) / 100);
  const total = premium + gst;

  const currentExpiry = renewalData?.policy_end_date;

  const newExpiryDate = currentExpiry ? new Date(currentExpiry) : null;

  if (newExpiryDate) {
    newExpiryDate.setFullYear(
      newExpiryDate.getFullYear() + Number(proposal?.tenure || 1),
    );
  }

  const categoryTitle = useMemo(() => {
    switch (proposal?.category) {
      case "car":
        return "Car Insurance";
      case "bike":
        return "Bike Insurance";
      case "health":
        return "Health Insurance";
      case "life":
        return "Life Insurance";
      case "travel":
        return "Travel Insurance";
      default:
        return "Insurance";
    }
  }, [proposal]);



const handlePaymentComplete = async () => {
  try {

    const orderResponse = await axios.post(
      "https://insurance.spay.live/Backend/laravel_project/public/api/create-order",
      {
        amount: total,
      }
    );

    if (!orderResponse?.data?.success) {

      alert("Unable to create payment order");

      return;
    }

    const options = {

      key: import.meta.env.VITE_RAZORPAY_KEY,

      order_id: orderResponse.data.order_id,

      currency: "INR",

      name: "SPAY FINTECH PRIVATE LIMITED",

      description: "Insurance Premium Payment",

      image:
        "https://spay.live/spayliveBackend/storage/blogs/logo-spay.png",

      prefill: {

        name: proposal?.full_name || "",

        email:
          proposal?.email ||
          proposal?.payer_email ||
          "",

        contact:
          proposal?.mobile ||
          proposal?.phone ||
          ""
      },

      theme: {
        color: "#2952ff",
      },

      modal: {
        escape: false,
      },

      handler: async function (response) {

        try {

          const verifyResponse = await axios.post(
            "https://insurance.spay.live/Backend/laravel_project/public/api/verify-payment",
            {
              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_signature:
                response.razorpay_signature,
            }
          );

          if (!verifyResponse.data.success) {

            alert("Payment verification failed");

            return;
          }

          const completeResponse = await postData(
            "complete-payment",
            {
              application_number:
                proposal?.application_number,

              renewal,

              old_policy_id:
                renewalData?.id || null,

              transaction_id:
                response.razorpay_payment_id,
            }
          );

          if (completeResponse?.status) {

            navigate("/policy-success", {
              state: {
                proposal:
                  completeResponse.proposal,

                renewal,

                renewalData,
              },
            });

          } else {

            alert(
              completeResponse?.message ||
              "Unable to generate policy"
            );
          }

        } catch (error) {

          console.error(
            "Verification Error",
            error
          );

          alert(
            "Payment verification failed"
          );
        }
      }
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on(
      "payment.failed",
      function (response) {

        console.error(
          "Payment Failed",
          response.error
        );

        alert(
          response.error.description ||
          "Payment Failed"
        );
      }
    );

    razorpay.open();

  } catch (error) {

    console.error(
      "Create Order Error",
      error
    );

    alert(
      "Unable to initiate payment"
    );
  }
};
useEffect(() => {
  const script = document.createElement("script");

  script.src =
    "https://checkout.razorpay.com/v1/checkout.js";

  script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
        {/* PAGE HEADER */}

        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>

              <p className="mt-2 text-sm text-slate-500">
                Review your insurance details and complete your payment.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {renewal && (
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />

                  <span className="text-xs font-semibold text-blue-700">
                    Renewal Policy
                  </span>
                </div>
              )}

              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2">
                <Lock className="h-4 w-4 text-green-600" />

                <span className="text-xs font-semibold text-green-700">
                  Secure Checkout
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* LEFT SIDEBAR */}

          <div className="space-y-4">
            {/* STATUS */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                  <ShieldCheck className="h-6 w-6 text-indigo-600" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">Payment Status</h2>

                  <p className="text-sm text-slate-500">
                    Complete your purchase
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />

                  <span className="text-sm text-slate-700">Plan Selected</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />

                  <span className="text-sm text-slate-700">
                    Proposal Submitted
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500" />

                  <span className="text-sm font-medium text-slate-700">
                    Payment Pending
                  </span>
                </div>
              </div>
            </div>

            {/* TOTAL CARD */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Total Payable
              </p>

              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                ₹{total}
              </h2>

              <p className="mt-2 text-sm text-slate-500">Inclusive of GST</p>
            </div>

  
          </div>

          {/* RIGHT CONTENT */}

          <div className="space-y-6">
            {/* CUSTOMER & POLICY */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Policy Information
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-indigo-600" />

                    <div>
                      <p className="text-xs text-slate-500">Customer Name</p>

                      <h3 className="font-semibold text-slate-900">
                        {proposal?.full_name || "-"}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-indigo-600" />

                    <div>
                      <p className="text-xs text-slate-500">Insurance Type</p>

                      <h3 className="font-semibold text-slate-900">
                        {categoryTitle}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <Receipt className="h-5 w-5 text-indigo-600" />

                    <div>
                      <p className="text-xs text-slate-500">
                        Application Number
                      </p>

                      <h3 className="font-semibold text-slate-900 break-all">
                        {proposal?.application_number}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-indigo-600" />

                    <div>
                      <p className="text-xs text-slate-500">Policy Duration</p>

                      <h3 className="font-semibold text-slate-900">
                        {proposal?.tenure} Year
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RENEWAL SECTION */}

            {renewal && (
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />

                  <h2 className="text-xl font-bold text-slate-900">
                    Renewal Details
                  </h2>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs text-slate-500">
                      Existing Policy Number
                    </p>

                    <h3 className="mt-2 font-semibold text-slate-900">
                      {renewalData?.policy_number || "-"}
                    </h3>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs text-slate-500">
                      Current Expiry Date
                    </p>

                    <h3 className="mt-2 font-semibold text-red-600">
                      {currentExpiry
                        ? new Date(currentExpiry).toLocaleDateString()
                        : "-"}
                    </h3>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs text-slate-500">New Expiry Date</p>

                    <h3 className="mt-2 font-semibold text-green-600">
                      {newExpiryDate ? newExpiryDate.toLocaleDateString() : "-"}
                    </h3>
                  </div>
                </div>
              </div>
            )}

            {/* PAYMENT SUMMARY */}

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Payment Summary
              </h2>

              <div className="mt-6 divide-y divide-slate-200">
                <div className="flex items-center justify-between py-4">
                  <span className="text-slate-600">Premium Amount</span>

                  <span className="font-semibold text-slate-900">
                    ₹{premium}
                  </span>
                </div>

                <div className="flex items-center justify-between py-4">
                  <span className="text-slate-600">GST (18%)</span>

                  <span className="font-semibold text-slate-900">₹{gst}</span>
                </div>

                <div className="flex items-center justify-between py-5">
                  <span className="text-lg font-bold text-slate-900">
                    Total Amount
                  </span>

                  <span className="text-2xl font-bold text-indigo-600">
                    ₹{total}
                  </span>
                </div>
              </div>

              {/* INFO NOTE */}

              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 text-amber-600" />

                  <p className="text-sm text-amber-700">
                    Your policy number will be generated automatically after
                    successful payment verification.
                  </p>
                </div>
              </div>

              {/* SECURITY */}

              <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />

                  <span className="text-sm font-medium text-green-700">
                    100% Secure Payment Gateway
                  </span>
                </div>
              </div>

              {/* PAYMENT BUTTON */}

              <button
                onClick={handlePaymentComplete}
                disabled={loading}
                className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  "Processing Payment..."
                ) : (
                  <>
                    Complete Payment
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
