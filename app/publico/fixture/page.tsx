"use client";

import { useMemo, useState } from "react";
import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";
import MatchCard from "@/components/public/MatchCard";
import { getCategoryName, tournamentData } from "@/data/tournament";

export default function FixturePage() {
  const [categoryId, setCategoryId] = useState("todos");
  const [round, setRound] = useState("todos");
  const [group, setGroup] = useState("todos");

  const filteredMatches = useMemo(() => {
    return tournamentData.matches.filter((match) => {
      const categoryOk = categoryId === "todos" || match.categoryId === categoryId;
      const roundOk = round === "todos" || String(match.round) === round;
      const groupOk = group === "todos" || match.group === group;
      return categoryOk && roundOk && groupOk;
    });
  }, [categoryId, round, group]);

  const groups = useMemo(() => {
    return tournamentData.groups
      .filter((item) => categoryId === "todos" || item.categoryId === categoryId)
      .map((item) => item.name)
      .filter((value, index, array) => array.indexOf(value) === index);
  }, [categoryId]);

  const rounds = Array.from(new Set(tournamentData.matches.map((match) => match.round).filter(Boolean))).sort((a, b) => Number(a) - Number(b));

  return (
    <main className="min-h-screen bg-slate-50">
      <PublicHeader />

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Programación pública</p>
          <h1 className="text-4xl font-black">Fixture del campeonato</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Las fechas 1 y 2 incluyen programación con día, campo y hora según el archivo de Excel. Las demás jornadas quedan cargadas como fixture por fecha deportiva.
          </p>
        </div>

        <div className="mb-8 grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-3">
          <label className="text-sm font-bold">
            Categoría
            <select value={categoryId} onChange={(event) => { setCategoryId(event.target.value); setGroup("todos"); }} className="mt-2 w-full rounded-xl border p-3">
              <option value="todos">Todas</option>
              {tournamentData.categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </label>

          <label className="text-sm font-bold">
            Grupo
            <select value={group} onChange={(event) => setGroup(event.target.value)} className="mt-2 w-full rounded-xl border p-3">
              <option value="todos">Todos</option>
              {groups.map((groupName) => (
                <option key={groupName} value={groupName}>{groupName}</option>
              ))}
            </select>
          </label>

          <label className="text-sm font-bold">
            Fecha deportiva
            <select value={round} onChange={(event) => setRound(event.target.value)} className="mt-2 w-full rounded-xl border p-3">
              <option value="todos">Todas</option>
              {rounds.map((roundNumber) => (
                <option key={String(roundNumber)} value={String(roundNumber)}>Fecha {roundNumber}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-black">Programación con día, campo y hora</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {tournamentData.calendarEvents.map((event) => (
              <MatchCard
                key={event.id}
                category={event.categoryLabel ?? undefined}
                round={event.round}
                dateLabel={event.dateLabel}
                field={event.field}
                time={event.time}
                home={event.home}
                away={event.away}
                status={event.status}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-black">Fixture completo por categoría y grupo</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredMatches.map((match) => (
              <MatchCard
                key={match.id}
                category={getCategoryName(match.categoryId)}
                group={match.group}
                round={match.round}
                home={match.home}
                away={match.away}
                status={match.status}
              />
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
