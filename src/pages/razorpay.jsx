import React from "react";
import axios from "axios";

const RazorpayPage = () => {
  const handlePayment = async () => {
    try {
      const orderResponse = await axios.post(
        "https://insurance.spay.live/Backend/laravel_project/public/api/create-order",
        {
          amount: 1,
        },
      );

      const options = {
        // key: import.meta.env.VITE_RAZORPAY_KEY,

        // amount: 50000,

        currency: "INR",

        name: "Spay Fintech Pvt. Ltd.",

        description: "Insurance Premium Payment",

        image: "https://spay.live/spayliveBackend/storage/blogs/logo-spay.png",

        order_id: orderResponse.data.order_id,

        handler: async function (response) {
          try {
            const verify = await axios.post(
              "https://insurance.spay.live/Backend/laravel_project/public/api/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,

                razorpay_payment_id: response.razorpay_payment_id,

                razorpay_signature: response.razorpay_signature,
              },
            );

            if (verify.data.success) {
              alert("Payment Successful");
            } else {
              alert("Payment Verification Failed");
            }
          } catch (error) {
            console.error(error);
            alert("Verification Error");
          }
        },

        prefill: {
          name: "Customer Name",
          email: "customer@test.com",
          contact: "9999999999",
        },

        theme: {
          color: "#2952ff",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        console.log(response.error);
        alert("Payment Failed");
      });

      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Unable to create order");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Pay Now ₹1
      </button>
    </div>
  );
};

export default RazorpayPage;
