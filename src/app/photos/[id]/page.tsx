"use client";
import React from "react";
import Image from "next/image";
import { data } from "../../data";

export default function page({ params }: { params: { id: string } }) {
  const item = data.find((item) => item.id === +params.id)!;

  return (
    <div>
      <Image
        src={item.src}
        alt="img"
        width={300}
        height={300}
        className="mx-auto"
      />
      <div className="border-2 border-dashed border-gray-500 p-30">
        {item.src}
      </div>
    </div>
  );
}
