import React from "react";
import { Metadata } from "next";
import BlogList from "../components/BlogList";

export const metadata: Metadata = {
  title: "Blog List",
};

const App: React.FC = () => <BlogList />;

export default App;
