export function generateAccessLink(matchId: string, role: string) {
  return `match:${matchId}:role:${role}`;
}
