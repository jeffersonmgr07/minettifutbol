import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    module: "jugadores",
    status: "ok",
    message: "API inicial de jugadores",
  });
}
