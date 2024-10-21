import React from "react";
import imgSrc from "/public/home.png";
import Container from "../components/Container";

export const metadata = {
  title: "Home",
};
export default function page() {
  return <Container imgSrc={imgSrc as unknown as string} content="Home" />;
}
