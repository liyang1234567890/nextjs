"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  console.log("🚀 ~ Header ~ pathname:", pathname);

  const linkData = [
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/settings",
      label: "Settings",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
    },
  ];

  const link = ["/", "/settings", "/dashboard", "/about", "test"];

  return (
    <>
      {link.includes(pathname) ? (
        <div className="absolute w-full z-10">
          {/* style={{ display: "flex", justifyContent: "space-between" }} */}
          <div className="flex justify-between container mx-auto text-white p-8 items-center">
            <Link className="text-3xl font-bold" href="/">
              Home
            </Link>
            <div className="text-sl space-x-4">
              {linkData.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={pathname === item.href ? "text-purple-500" : ""}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
