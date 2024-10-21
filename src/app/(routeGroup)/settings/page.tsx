import React from "react";
import imgSrc from "/public/p3.png";
import Container from "@/components/Container";

export const metadata = {
  title: "Settings",
};
export default function page() {
  return <Container imgSrc={imgSrc} content="Settings" />;
}
