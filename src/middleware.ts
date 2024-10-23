import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("🚀 pathname:", pathname);
  // if(pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/about2', request.url));
  // }

  if (pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/about2", request.url));
  }
  // return NextResponse.json({
  //   time: new Date().toLocaleTimeString(),
  //   searchParmas
  // });
}

// export const config = {
//   matcher: "/about",
// };
