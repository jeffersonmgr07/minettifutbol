export function isDuplicateInSameCategory(existingDniList: string[], dni: string) {
  return existingDniList.includes(dni);
}
