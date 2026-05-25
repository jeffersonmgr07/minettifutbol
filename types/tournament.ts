export type Team = {
  categoryId: string;
  categoryName: string;
  group: string;
  name: string;
};

export type Match = {
  id: string;
  categoryId: string;
  group: string;
  round: number | null;
  home: string;
  away: string | null;
  status: string;
};
