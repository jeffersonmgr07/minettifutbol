import CategoryBadge from "./CategoryBadge";

type MatchCardProps = {
  category?: string;
  group?: string;
  round?: number | null;
  dateLabel?: string | null;
  field?: string | null;
  time?: string | null;
  home: string;
  away?: string | null;
  status?: string;
};

export default function MatchCard({
  category,
  group,
  round,
  dateLabel,
  field,
  time,
  home,
  away,
  status = "programado",
}: MatchCardProps) {
  const isBye = status === "descansa" || !away;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        {category ? <CategoryBadge>{category}</CategoryBadge> : null}
        {group ? <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{group}</span> : null}
        {round ? <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">Fecha {round}</span> : null}
        {isBye ? <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Descansa</span> : null}
      </div>

      {dateLabel || field || time ? (
        <p className="mt-3 text-sm text-slate-500">
          {[dateLabel, field, time].filter(Boolean).join(" · ")}
        </p>
      ) : null}

      <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <h3 className="font-black text-slate-900">{home}</h3>
        <span className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-black text-slate-500">
          {isBye ? "—" : "VS"}
        </span>
        <h3 className="text-right font-black text-slate-900">{away ?? "Descanso"}</h3>
      </div>
    </article>
  );
}
