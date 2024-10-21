import React from "react";
import imgSrc from "/public/p1.jpg";
import Container from "@/components/Container";

export const metadata = {
  title: "About",
};

export default function page() {
  return <Container imgSrc={imgSrc} content="About" />;
}
