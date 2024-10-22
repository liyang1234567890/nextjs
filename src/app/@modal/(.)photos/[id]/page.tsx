"use client";
import React from "react";
import Image from "next/image";
import { data } from "@/app/data";
import { useRouter } from "next/navigation";

export default function page({ params }: { params: { id: string } }) {
  const item = data.find((item) => item.id === +params.id)!;
  const router = useRouter();

  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-gray-100/[.8] w-full h-full"
      onClick={router.back}
    >
      <Image
        src={item.src}
        alt="img"
        width={300}
        height={300}
        className="mx-auto"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
