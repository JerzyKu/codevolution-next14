import React from "react";

type Props = {
  params: { 
    id: string
    rewievId: string
  };
};

export default function page({ params }: Props) {
  return <div>rewiev {params.rewievId} for product {params.id}</div>;
}
