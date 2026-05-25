import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    module: "convocatorias",
    status: "ok",
    message: "API inicial de convocatorias",
  });
}
