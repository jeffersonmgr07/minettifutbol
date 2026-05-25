import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";
import MatchCard from "@/components/public/MatchCard";
import StandingsTable from "@/components/public/StandingsTable";
import { getCategoryName, tournamentData } from "@/data/tournament";
import { firstDateResults, getStandingsRows } from "@/data/results";

export default function HomePage() {
  const scheduledMatches = tournamentData.calendarEvents
    .filter((event) => event.status === "programado" && !firstDateResults.some((result) => result.calendarEventId === event.id))
    .slice(0, 6);

  const summary = tournamentData.categories.map((category) => ({
    ...category,
    teams: tournamentData.teams.filter((team) => team.categoryId === category.id).length,
    matches: tournamentData.matches.filter((match) => match.categoryId === category.id && match.status === "programado").length,
  }));

  const standings = getStandingsRows("sub6").slice(0, 6);
  const latestResults = firstDateResults.slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PublicHeader />

      <section className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-lime-600 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-bold">
              {tournamentData.tournament.venue}
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              {tournamentData.tournament.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
              Portal público con fixture, programación, resultados y tablas para las categorías Sub-6, Sub-8, Sub-10 y Sub-12.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/publico/fixture" className="rounded-xl bg-white px-5 py-3 font-black text-emerald-800 shadow">
                Ver fixture
              </a>
              <a href="/publico/equipos" className="rounded-xl border border-white/60 px-5 py-3 font-black text-white">
                Ver equipos
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-5 shadow-2xl backdrop-blur">
            <h2 className="text-xl font-black">Programación cargada</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {summary.map((item) => (
                <div key={item.id} className="rounded-2xl bg-white p-4 text-slate-900">
                  <p className="text-sm font-black text-emerald-700">{item.name}</p>
                  <p className="mt-1 text-2xl font-black">{item.teams} equipos</p>
                  <p className="text-sm text-slate-500">{item.matches} partidos programados</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Fixture oficial</p>
            <h2 className="text-3xl font-black">Próximos partidos con fecha y hora</h2>
          </div>
          <a href="/publico/fixture" className="font-black text-emerald-700">Ver fixture completo</a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scheduledMatches.map((event) => (
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
      </section>


      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Resultados cargados</p>
            <h2 className="text-3xl font-black">Fecha 1 · 17 de mayo</h2>
          </div>
          <a href="/publico/resultados" className="font-black text-emerald-700">Ver todos los resultados</a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestResults.map((result) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Tabla actualizada</p>
          <h2 className="text-3xl font-black">Sub 6</h2>
          <p className="mt-2 text-slate-500">Tabla calculada con los resultados cargados de la Fecha 1.</p>
        </div>
        <StandingsTable rows={standings} />
      </section>

      <PublicFooter />
    </main>
  );
}
