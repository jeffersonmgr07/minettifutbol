import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PublicHeader />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Resultados</p>
        <h1 className="text-4xl font-black">Resultados oficiales</h1>
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="text-lg font-bold text-slate-700">Aún no hay resultados registrados.</p>
          <p className="mt-2 text-slate-500">Cuando el árbitro cargue el acta y la organización valide el partido, aparecerán aquí.</p>
        </div>
      </section>
      <PublicFooter />
    </main>
  );
}
