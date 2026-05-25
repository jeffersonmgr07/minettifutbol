export function isValidBirthYearForCategory(birthYear: number, minBirthYear: number, maxBirthYear: number) {
  return birthYear >= minBirthYear && birthYear <= maxBirthYear;
}
