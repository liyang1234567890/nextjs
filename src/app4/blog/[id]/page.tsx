import React from "react";
import { Card } from "antd";
import { data } from "../../data";

// or Dynamic metadata
export async function generateMetadata({ params }: any) {
  return {
    title: `Blog Detail ${params.id}`,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  console.log("params", params);

  const item = data.find((item) => item.id === +params.id)!;

  return (
    <Card title={item.title}>
      <p>{item.body}</p>
    </Card>
  );
}
