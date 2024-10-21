import React from "react";
import Image from "next/image";
import type StaticImageData from "next/image";

type IProps = {
  imgSrc: StaticImageData;
  content: string;
};
export default function Container(props: IProps) {
  const { imgSrc, content } = props;

  return (
    <div className="text-white h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={imgSrc} alt="home" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl">{content}</h1>
      </div>
    </div>
  );
}
