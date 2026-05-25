import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";
import { tournamentData } from "@/data/tournament";

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PublicHeader />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Reglamento cargado</p>
        <h1 className="text-4xl font-black">Bases principales del torneo</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Resumen operativo para el sistema. La versión legal completa debe mantenerse como documento oficial de la organización.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Categorías y años de nacimiento</h2>
            <div className="mt-4 space-y-3">
              {tournamentData.categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <span className="font-black">{category.name}</span>
                  <span className="font-bold text-emerald-700">{category.birthYears}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Jugadores por equipo</h2>
            <p className="mt-3 text-slate-600">Mínimo: {tournamentData.rules.teamRoster.minPlayers}</p>
            <p className="text-slate-600">Máximo: {tournamentData.rules.teamRoster.maxPlayers}</p>
            <p className="mt-3 rounded-2xl bg-amber-50 p-4 text-sm text-amber-800">{tournamentData.rules.teamRoster.note}</p>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Puntuación</h2>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>Ganador: {tournamentData.rules.points.win} puntos</li>
              <li>Empate: {tournamentData.rules.points.draw} punto por equipo</li>
              <li>Perdedor: {tournamentData.rules.points.loss} puntos</li>
              <li>W.O.: ganador con {tournamentData.rules.points.woWinnerGoals} goles a favor y perdedor con {tournamentData.rules.points.woLoserPoints} puntos.</li>
            </ul>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black">Criterios de desempate</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-600">
              {tournamentData.rules.tiebreakers.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-black">Control de identidad y antifraude</h2>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {tournamentData.rules.antiFraud.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4 font-bold text-slate-700">{item}</div>
              ))}
            </div>
          </article>
        </div>
      </section>
      <PublicFooter />
    </main>
  );
}
