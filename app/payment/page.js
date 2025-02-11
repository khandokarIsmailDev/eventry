import PaymentFrom from "@/components/PaymentFrom";
import React from "react";

const paymentPage = () => {
  return (
    <div className="bg-[#242526] p-6 rounded-lg max-w-xl mx-auto my-12">
      <h2 className="font-bold text-xl mb-8">Payment Details</h2>
      <PaymentFrom/>
    </div>
  );
};

export default paymentPage;
