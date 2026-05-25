import PublicHeader from "@/components/public/PublicHeader";
import PublicFooter from "@/components/public/PublicFooter";
import { tournamentData } from "@/data/tournament";

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PublicHeader />
      <section className="mx-auto max-w-7xl px-5 py-10">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Equipos participantes</p>
        <h1 className="text-4xl font-black">Categorías y grupos</h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {tournamentData.categories.map((category) => {
            const groups = tournamentData.groups.filter((group) => group.categoryId === category.id);
            return (
              <article key={category.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-black">{category.name}</h2>
                    <p className="text-sm text-slate-500">Años permitidos: {category.birthYears}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">
                    {tournamentData.teams.filter((team) => team.categoryId === category.id).length} equipos
                  </span>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {groups.map((group) => (
                    <div key={`${category.id}-${group.name}`} className="rounded-2xl bg-slate-50 p-4">
                      <h3 className="font-black text-slate-900">{group.name}</h3>
                      <ul className="mt-3 space-y-2">
                        {tournamentData.teams
                          .filter((team) => team.categoryId === category.id && team.group === group.name)
                          .map((team) => (
                            <li key={`${category.id}-${group.name}-${team.name}`} className="rounded-xl bg-white px-3 py-2 text-sm font-bold shadow-sm">
                              {team.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <PublicFooter />
    </main>
  );
}
