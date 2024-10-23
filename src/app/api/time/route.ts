import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParmas = request.nextUrl.searchParams;
  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
    searchParmas
  });
}
