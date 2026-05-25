import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    module: "partidos",
    status: "ok",
    message: "API inicial de partidos",
  });
}
