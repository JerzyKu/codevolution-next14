import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { id: string };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.id}`,
//   };
// };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

  const title = await new Promise( (resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.id}`)
    }, 100)
  })

  return {
    title: `Product ${title}`,
  };
};

export default function page({ params }: Props) {
  if (params.id === "3") notFound();

  return <div>Products {params.id} details.</div>;
}
