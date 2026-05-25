import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";

export default function ScorersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PublicHeader />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Goleadores</p>
        <h1 className="text-4xl font-black">Ranking de goleadores</h1>
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="text-lg font-bold text-slate-700">Aún no hay goles registrados.</p>
          <p className="mt-2 text-slate-500">Esta sección se alimentará desde las actas arbitrales.</p>
        </div>
      </section>
      <PublicFooter />
    </main>
  );
}
