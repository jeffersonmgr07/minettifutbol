export function validateQR(value: string) { return value.startsWith('player:') || value.startsWith('match:'); }
