import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    module: "actas",
    status: "ok",
    message: "API inicial de actas",
  });
}
