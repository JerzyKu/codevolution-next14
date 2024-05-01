"use client"
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function OrderProduct({}: Props) {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing order");
    router.push('/')
  };

  return (
    <>
      <div>OrderProduct</div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
