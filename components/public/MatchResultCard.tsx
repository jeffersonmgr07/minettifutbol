type Result = {
  category: string;
  home: string;
  away: string;
  homeScore: number;
  awayScore: number;
};

export default function MatchResultCard({ result }: { result: Result }) {
  return (
    <article className="rounded-2xl bg-white p-4 shadow">
      <p className="text-xs font-bold uppercase text-emerald-700">{result.category}</p>
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <span className="font-bold">{result.home}</span>
        <span className="rounded-xl bg-slate-100 px-3 py-2 text-lg font-black">
          {result.homeScore} - {result.awayScore}
        </span>
        <span className="text-right font-bold">{result.away}</span>
      </div>
    </article>
  );
}
