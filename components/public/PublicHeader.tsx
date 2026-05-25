import { tournamentData } from "@/data/tournament";

export default function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-xl font-black text-white">
            MF
          </div>
          <div>
            <p className="text-base font-black leading-tight text-emerald-800">Minetti Fútbol</p>
            <p className="hidden text-xs text-slate-500 sm:block">{tournamentData.tournament.organizer}</p>
          </div>
        </a>

        <nav className="hidden gap-5 text-sm font-bold text-slate-700 lg:flex">
          <a href="/publico/fixture">Fixture</a>
          <a href="/publico/resultados">Resultados</a>
          <a href="/publico/tabla-posiciones">Tablas</a>
          <a href="/publico/goleadores">Goleadores</a>
          <a href="/publico/equipos">Equipos</a>
          <a href="/publico/bases">Bases</a>
        </nav>

        <a href="/login" className="rounded-xl bg-emerald-700 px-4 py-2 text-sm font-bold text-white shadow">
          Acceso interno
        </a>
      </div>
    </header>
  );
}
