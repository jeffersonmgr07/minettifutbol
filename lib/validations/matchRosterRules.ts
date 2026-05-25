export function canAddPlayerToMatchRoster(isApproved: boolean, isSuspended: boolean) {
  return isApproved && !isSuspended;
}
