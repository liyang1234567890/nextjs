"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mt-10">
      <h2>dashboard template {count}</h2>
      <button
        className="bg-black text-white p-2 my-4 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        add
      </button>
      {children}
    </div>
  );
}
