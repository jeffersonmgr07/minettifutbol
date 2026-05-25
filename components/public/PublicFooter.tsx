import { tournamentData } from "@/data/tournament";

export default function PublicFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 text-sm text-slate-600 md:grid-cols-2">
        <div>
          <p className="font-black text-slate-900">{tournamentData.tournament.name}</p>
          <p className="mt-1">{tournamentData.tournament.venue}</p>
        </div>
        <div className="md:text-right">
          <p>Información pública referencial del campeonato.</p>
          <p>No se publican DNI, documentos ni datos sensibles de menores.</p>
        </div>
      </div>
    </footer>
  );
}
