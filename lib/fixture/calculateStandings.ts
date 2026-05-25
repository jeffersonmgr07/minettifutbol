export type MatchResult = {
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
};

export function calculateBasicPoints(result: MatchResult) {
  if (result.homeScore > result.awayScore) return { home: 3, away: 0 };
  if (result.homeScore < result.awayScore) return { home: 0, away: 3 };
  return { home: 1, away: 1 };
}
