"use client";

import { useMemo, useState } from "react";
import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";
import MatchCard from "@/components/public/MatchCard";
import { firstDateResults } from "@/data/results";
import { tournamentData } from "@/data/tournament";

export default function ResultsPage() {
  const [categoryId, setCategoryId] = useState("todos");
  const [field, setField] = useState("todos");

  const filteredResults = useMemo(() => {
    return firstDateResults.filter((result) => {
      const categoryOk = categoryId === "todos" || result.categoryId === categoryId;
      const fieldOk = field === "todos" || result.field === field;
      return categoryOk && fieldOk;
    });
  }, [categoryId, field]);

  const fields = Array.from(new Set(firstDateResults.map((result) => result.field)));

  return (
    <main className="min-h-screen bg-slate-50">
      <PublicHeader />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Resultados</p>
        <h1 className="text-4xl font-black">Fecha 1 · 17 de mayo</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Resultados cargados desde la imagen de la programación enviada. El partido ganado por W.O. se muestra con marcador 2-0 para efectos de tabla.
        </p>

        <div className="my-8 grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-2">
          <label className="text-sm font-bold">
            Categoría
            <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)} className="mt-2 w-full rounded-xl border p-3">
              <option value="todos">Todas</option>
              {tournamentData.categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </label>

          <label className="text-sm font-bold">
            Campo
            <select value={field} onChange={(event) => setField(event.target.value)} className="mt-2 w-full rounded-xl border p-3">
              <option value="todos">Todos</option>
              {fields.map((fieldName) => (
                <option key={fieldName} value={fieldName}>{fieldName}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredResults.map((result) => (
            <MatchCard
              key={result.id}
              category={result.categoryLabel}
              group={result.group}
              round={result.round}
              dateLabel={result.dateLabel}
              field={result.field}
              time={result.time}
              home={result.home}
              away={result.away}
              status={result.status}
              homeScore={result.homeScore}
              awayScore={result.awayScore}
              resultType={result.resultType}
              note={result.note}
            />
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-amber-50 p-5 text-sm font-bold text-amber-800">
          Nota: el marcador VASQUEZ FC vs TALENTOS UNIDOS fue transcrito como 1 - 4 porque en la imagen se observa “01” para VASQUEZ FC. Revísalo si deseas dejarlo como 0 - 4.
        </div>
      </section>
      <PublicFooter />
    </main>
  );
}
