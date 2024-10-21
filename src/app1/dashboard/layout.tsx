"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const linkData = [
  {
    name: "About",
    href: "/dashboard/about",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();

  return (
    // padding 4 width是1/2 居中 上外边距10
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {linkData.map((item, index) => {
          return (
            <Link
              key={index}
              className={pathname === item.href ? "text-purple-500" : ""}
              href={item.href}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <div>dashboard layout {count}</div>
      <button
        // my-4 margin y轴方向
        className="bg-black text-white p-2 my-4 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        add
      </button>
      {children}
    </div>
  );
}
