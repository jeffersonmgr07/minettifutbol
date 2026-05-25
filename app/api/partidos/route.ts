import { NextResponse } from "next/server";
import { tournamentData } from "@/data/tournament";

export async function GET() {
  return NextResponse.json({
    module: "partidos",
    status: "ok",
    tournament: tournamentData.tournament.name,
  });
}
