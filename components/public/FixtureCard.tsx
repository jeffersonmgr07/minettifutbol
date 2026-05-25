type Match = {
  category: string;
  group: string;
  date: string;
  time: string;
  field: string;
  home: string;
  away: string;
};

export default function FixtureCard({ match }: { match: Match }) {
  return (
    <article className="rounded-2xl bg-white p-4 text-slate-900 shadow">
      <div className="flex items-center justify-between text-xs font-bold uppercase text-emerald-700">
        <span>{match.category} · {match.group}</span>
        <span>{match.time}</span>
      </div>
      <p className="mt-2 text-sm text-slate-500">{match.date} · {match.field}</p>
      <h3 className="mt-3 text-lg font-black">
        {match.home} <span className="text-slate-400">vs</span> {match.away}
      </h3>
    </article>
  );
}
