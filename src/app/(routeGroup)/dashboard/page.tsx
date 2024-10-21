import React from "react";
import imgSrc from "/public/p2.jpg";
import Container from "@/components/Container";

export const metadata = {
  title: "Dashboard",
};

export default function page() {
  return <Container imgSrc={imgSrc as unknown as string} content="Dashboard" />;
}
