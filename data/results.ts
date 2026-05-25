import { tournamentData } from "./tournament";

export type TournamentResult = {
  id: string;
  calendarEventId: string;
  dateLabel: string;
  round: number;
  field: string;
  time: string;
  categoryId: string;
  categoryLabel: string;
  group: string;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
  status: "jugado";
  resultType: "normal" | "wo";
  note?: string;
};

export const firstDateResults: TournamentResult[] = [
  { id: "res-1", calendarEventId: "cal-1", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 1", time: "09:00", categoryId: "sub6", categoryLabel: "SUB 6", group: "Único", home: "JM SPORT", away: "RENACE JUVENTUD", homeScore: 2, awayScore: 2, status: "jugado", resultType: "normal" },
  { id: "res-2", calendarEventId: "cal-2", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 1", time: "09:40", categoryId: "sub6", categoryLabel: "SUB 6", group: "Único", home: "BENJAMIN FC", away: "CLUB DEPORTIVO LARA", homeScore: 0, awayScore: 2, status: "jugado", resultType: "normal" },
  { id: "res-3", calendarEventId: "cal-3", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 1", time: "10:20", categoryId: "sub6", categoryLabel: "SUB 6", group: "Único", home: "TOLENTINO FC", away: "GUERREROS DE MANCHAY", homeScore: 0, awayScore: 4, status: "jugado", resultType: "normal" },
  { id: "res-4", calendarEventId: "cal-4", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 1", time: "11:00", categoryId: "sub8", categoryLabel: "SUB 8 (A)", group: "GRUPO A", home: "JYB", away: "DREAM TEAM", homeScore: 2, awayScore: 0, status: "jugado", resultType: "normal" },

  { id: "res-5", calendarEventId: "cal-5", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 2", time: "09:00", categoryId: "sub8", categoryLabel: "SUB 8 (B)", group: "GRUPO B", home: "BENJAMIN FC", away: "MATHE SPORT", homeScore: 1, awayScore: 3, status: "jugado", resultType: "normal" },
  { id: "res-6", calendarEventId: "cal-6", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 2", time: "09:40", categoryId: "sub8", categoryLabel: "SUB 8 (A)", group: "GRUPO A", home: "TOLENTINO FC", away: "JM SPORT", homeScore: 1, awayScore: 4, status: "jugado", resultType: "normal" },
  { id: "res-7", calendarEventId: "cal-7", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 2", time: "10:20", categoryId: "sub8", categoryLabel: "SUB 8 (A)", group: "GRUPO A", home: "FOVA", away: "RENACE JUVENTUD", homeScore: 2, awayScore: 1, status: "jugado", resultType: "normal" },
  { id: "res-8", calendarEventId: "cal-8", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 2", time: "11:00", categoryId: "sub8", categoryLabel: "SUB 8 (B)", group: "GRUPO B", home: "VASQUEZ FC", away: "GUERREROS DE MANCHAY", homeScore: 0, awayScore: 6, status: "jugado", resultType: "normal" },
  { id: "res-9", calendarEventId: "cal-9", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 2", time: "12:00", categoryId: "sub10", categoryLabel: "SUB 10 (B)", group: "GRUPO B", home: "VASQUEZ FC", away: "TALENTOS UNIDOS", homeScore: 1, awayScore: 4, status: "jugado", resultType: "normal", note: "Marcador transcrito desde imagen: se interpreta VASQUEZ FC 1 - 4 TALENTOS UNIDOS." },
  { id: "res-10", calendarEventId: "cal-10", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 2", time: "12:50", categoryId: "sub10", categoryLabel: "SUB 10 (B)", group: "GRUPO B", home: "GUERREROS DE MANCHAY", away: "DREAM TEAM", homeScore: 5, awayScore: 1, status: "jugado", resultType: "normal" },
  { id: "res-11", calendarEventId: "cal-11", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 2", time: "13:40", categoryId: "sub10", categoryLabel: "SUB 10 (B)", group: "GRUPO B", home: "JM SPORT", away: "TOLENTINO FC", homeScore: 3, awayScore: 0, status: "jugado", resultType: "normal" },
  { id: "res-12", calendarEventId: "cal-12", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 2", time: "14:30", categoryId: "sub10", categoryLabel: "SUB 10 (A)", group: "GRUPO A", home: "MATHE SPORT", away: "BENJAMIN FC", homeScore: 6, awayScore: 0, status: "jugado", resultType: "normal" },

  { id: "res-13", calendarEventId: "cal-13", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 3", time: "09:00", categoryId: "sub12", categoryLabel: "SUB 12 (B)", group: "GRUPO B", home: "DREAM TEAM", away: "CLUB DEPORTIVO LARA", homeScore: 2, awayScore: 0, status: "jugado", resultType: "wo", note: "DREAM TEAM ganó por W.O.; para tabla se registra 2-0." },
  { id: "res-14", calendarEventId: "cal-14", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 3", time: "09:50", categoryId: "sub12", categoryLabel: "SUB 12 (A)", group: "GRUPO A", home: "MATHE SPORT", away: "JYB", homeScore: 2, awayScore: 3, status: "jugado", resultType: "normal" },
  { id: "res-15", calendarEventId: "cal-15", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 3", time: "10:40", categoryId: "sub12", categoryLabel: "SUB 12 (A)", group: "GRUPO A", home: "SPORTING JF ONCE", away: "FOVA", homeScore: 4, awayScore: 2, status: "jugado", resultType: "normal" },
  { id: "res-16", calendarEventId: "cal-16", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 3", time: "11:30", categoryId: "sub12", categoryLabel: "SUB 12 (B)", group: "GRUPO B", home: "JM SPORT", away: "FOVITA", homeScore: 5, awayScore: 0, status: "jugado", resultType: "normal" },
  { id: "res-17", calendarEventId: "cal-17", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 3", time: "12:20", categoryId: "sub10", categoryLabel: "SUB 10 (A)", group: "GRUPO A", home: "TALENTOS DEL SUR", away: "SPORTING JF ONCE", homeScore: 2, awayScore: 1, status: "jugado", resultType: "normal" },
  { id: "res-18", calendarEventId: "cal-18", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 3", time: "13:10", categoryId: "sub12", categoryLabel: "SUB 12 (A)", group: "GRUPO A", home: "TOLENTINO FC", away: "BENJAMIN FC", homeScore: 5, awayScore: 2, status: "jugado", resultType: "normal" },
  { id: "res-19", calendarEventId: "cal-19", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 3", time: "14:00", categoryId: "sub12", categoryLabel: "SUB 12 (B)", group: "GRUPO B", home: "TALENTOS UNIDOS", away: "CACHORROS FC", homeScore: 3, awayScore: 2, status: "jugado", resultType: "normal" },
  { id: "res-20", calendarEventId: "cal-20", dateLabel: "17 DE MAYO FECHA 1", round: 1, field: "CAMPO 3", time: "14:50", categoryId: "sub10", categoryLabel: "SUB 10 (A)", group: "GRUPO A", home: "FOVA", away: "RENACE JUVENTUD", homeScore: 1, awayScore: 5, status: "jugado", resultType: "normal" },
];

function normalize(value: string | null | undefined) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function getResultForCalendarEvent(eventId: string) {
  return firstDateResults.find((result) => result.calendarEventId === eventId);
}

export function getResultForFixtureMatch(match: {
  categoryId: string;
  group: string;
  round: number | null;
  home: string;
  away?: string | null;
}) {
  return firstDateResults.find((result) =>
    result.categoryId === match.categoryId &&
    result.group === match.group &&
    result.round === match.round &&
    normalize(result.home) === normalize(match.home) &&
    normalize(result.away) === normalize(match.away)
  );
}

export function getLatestResults(limit = 6) {
  return firstDateResults.slice(0, limit);
}

export function getStandingsRows(categoryId: string, groupName?: string) {
  const teams = tournamentData.teams.filter((team) =>
    team.categoryId === categoryId && (!groupName || team.group === groupName)
  );

  const table = new Map(
    teams.map((team) => [
      `${team.group}__${normalize(team.name)}`,
      {
        position: 0,
        team: team.name,
        group: team.group,
        pj: 0,
        pg: 0,
        pe: 0,
        pp: 0,
        gf: 0,
        gc: 0,
        dg: 0,
        pts: 0,
      },
    ])
  );

  for (const result of firstDateResults) {
    if (result.categoryId !== categoryId) continue;
    if (groupName && result.group !== groupName) continue;

    const homeKey = `${result.group}__${normalize(result.home)}`;
    const awayKey = `${result.group}__${normalize(result.away)}`;
    const home = table.get(homeKey);
    const away = table.get(awayKey);

    if (!home || !away) continue;

    home.pj += 1;
    away.pj += 1;
    home.gf += result.homeScore;
    home.gc += result.awayScore;
    away.gf += result.awayScore;
    away.gc += result.homeScore;

    if (result.resultType === "wo") {
      home.pg += 1;
      away.pp += 1;
      home.pts += 3;
      away.pts -= 3;
      continue;
    }

    if (result.homeScore > result.awayScore) {
      home.pg += 1;
      away.pp += 1;
      home.pts += 3;
    } else if (result.homeScore < result.awayScore) {
      away.pg += 1;
      home.pp += 1;
      away.pts += 3;
    } else {
      home.pe += 1;
      away.pe += 1;
      home.pts += 1;
      away.pts += 1;
    }
  }

  return Array.from(table.values())
    .map((row) => ({ ...row, dg: row.gf - row.gc }))
    .sort((a, b) =>
      b.pts - a.pts ||
      b.dg - a.dg ||
      b.gf - a.gf ||
      a.team.localeCompare(b.team)
    )
    .map((row, index) => ({ ...row, position: index + 1 }));
}
