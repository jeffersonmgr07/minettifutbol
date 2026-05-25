import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";
import FixtureCard from "@/components/public/FixtureCard";
import MatchResultCard from "@/components/public/MatchResultCard";
import StandingsTable from "@/components/public/StandingsTable";

const upcomingMatches = [
  {
    category: "Sub-10",
    group: "Grupo A",
    date: "Sábado 15 de junio",
    time: "09:00 a.m.",
    field: "Cancha Municipal",
    home: "Academia Los Tigres",
    away: "Club Real Junior",
  },
  {
    category: "Sub-12",
    group: "Grupo B",
    date: "Sábado 15 de junio",
    time: "10:00 a.m.",
    field: "Cancha Municipal",
    home: "Unión Pachacamac",
    away: "Escuela San Miguel",
  },
];

const latestResults = [
  {
    category: "Sub-8",
    home: "Los Tigres",
    away: "Real Junior",
    homeScore: 3,
    awayScore: 1,
  },
  {
    category: "Sub-10",
    home: "Unión Pachacamac",
    away: "San Miguel",
    homeScore: 2,
    awayScore: 2,
  },
];

const standings = [
  { position: 1, team: "Los Tigres", pj: 3, pg: 3, pe: 0, pp: 0, gf: 10, gc: 2, dg: 8, pts: 9 },
  { position: 2, team: "Real Junior", pj: 3, pg: 2, pe: 0, pp: 1, gf: 7, gc: 4, dg: 3, pts: 6 },
  { position: 3, team: "San Miguel", pj: 3, pg: 1, pe: 1, pp: 1, gf: 5, gc: 5, dg: 0, pts: 4 },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <PublicHeader />

      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-lime-600 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-1 text-sm font-semibold">
              Campeonato local de fútbol de menores
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Minetti Fútbol
            </h1>
            <p className="mt-5 max-w-xl text-lg text-emerald-50">
              Fixture, resultados, tablas de posiciones y próximas fechas de las categorías Sub-6, Sub-8, Sub-10 y Sub-12.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/publico/fixture" className="rounded-xl bg-white px-5 py-3 font-bold text-emerald-800 shadow">
                Ver fixture
              </a>
              <a href="/login" className="rounded-xl border border-white/50 px-5 py-3 font-bold text-white">
                Acceso interno
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
            <h2 className="text-xl font-bold">Próxima fecha</h2>
            <div className="mt-4 space-y-4">
              {upcomingMatches.map((match, index) => (
                <FixtureCard key={index} match={match} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-black">Tabla de posiciones</h2>
              <a href="/publico/tabla-posiciones" className="text-sm font-bold text-emerald-700">
                Ver todas
              </a>
            </div>
            <StandingsTable rows={standings} />
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-black">Últimos resultados</h2>
              <a href="/publico/resultados" className="text-sm font-bold text-emerald-700">
                Ver más
              </a>
            </div>
            <div className="space-y-4">
              {latestResults.map((result, index) => (
                <MatchResultCard key={index} result={result} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
