export function canAddPlayerToMatchRoster(isApproved: boolean, isSuspended: boolean, isInOfficialRoster: boolean) {
  return isApproved && !isSuspended && isInOfficialRoster;
}
