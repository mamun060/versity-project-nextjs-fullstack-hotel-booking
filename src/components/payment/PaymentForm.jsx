"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PaymentForm = ({ loggedUser, hotelInfo , checkin , checkout }) => {
  const router = useRouter();
  const [ error, setError ] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   const hotelId = hotelInfo?.id;
  //   const userId = loggedUser?.id;
  //   const checkin = formData.get("checkin");
  //   const checkout = formData.get("checkout");

  //   const res = await fetch("/api/auth/payment", {
  //     methodL: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       hotelId,
  //       userId,
  //       checkin,
  //       checkout,
  //     })
  //   });

  //   try {
      
  //   } catch (error) {
  //     console.error(error);
  //     setError(error.message);
  //   }
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const formData = new FormData(event.currentTarget);
        const hotelId = hotelInfo?.id;
        const userId = loggedUser?.id;
        const checkin = formData.get("checkin");
        const checkout = formData.get("checkout");

        const res = await fetch("/api/auth/payment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hotelId,
                userId,
                checkin,
                checkout,
            }),
        });
        res.status === 201 && router.push("/bookings");
    } catch (error) {
        console.error(error);
        setError(error.message);
    }
}

  return (
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={loggedUser?.name}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={loggedUser.email}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <span>Check in</span>
        <h4 className="mt-2">
          <input value={checkin} type="date" name="checkin" id="checkin" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <span>Checkout</span>
        <h4 className="mt-2">
          <input value={checkout} type="date" name="checkout" id="checkout" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Pay Now (${(hotelInfo?.highRate + hotelInfo?.lowRate) / 2})
      </button>
    </form>
  );
};

export default PaymentForm;
