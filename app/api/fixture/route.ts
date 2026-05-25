import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    module: "fixture",
    status: "ok",
    message: "API inicial de fixture",
  });
}
