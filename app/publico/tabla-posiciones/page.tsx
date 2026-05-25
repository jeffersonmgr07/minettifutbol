"use client";

import { useMemo, useState } from "react";
import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";
import StandingsTable from "@/components/public/StandingsTable";
import { getStandingsRows, tournamentData } from "@/data/tournament";

export default function StandingsPage() {
  const [categoryId, setCategoryId] = useState("sub6");
  const [group, setGroup] = useState("todos");

  const groups = tournamentData.groups.filter((item) => item.categoryId === categoryId);
  const rows = useMemo(() => getStandingsRows(categoryId, group === "todos" ? undefined : group), [categoryId, group]);

  return (
    <main className="min-h-screen bg-slate-50">
      <PublicHeader />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Tabla de posiciones</p>
        <h1 className="text-4xl font-black">Clasificación inicial</h1>
        <p className="mt-3 text-slate-600">Todos los equipos inician en cero hasta registrar resultados validados por la organización.</p>

        <div className="my-8 grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-2">
          <label className="text-sm font-bold">
            Categoría
            <select value={categoryId} onChange={(event) => { setCategoryId(event.target.value); setGroup("todos"); }} className="mt-2 w-full rounded-xl border p-3">
              {tournamentData.categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-bold">
            Grupo
            <select value={group} onChange={(event) => setGroup(event.target.value)} className="mt-2 w-full rounded-xl border p-3">
              <option value="todos">Todos</option>
              {groups.map((item) => (
                <option key={item.name} value={item.name}>{item.name}</option>
              ))}
            </select>
          </label>
        </div>

        <StandingsTable rows={rows} />
      </section>
      <PublicFooter />
    </main>
  );
}
