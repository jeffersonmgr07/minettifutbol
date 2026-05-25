export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Minetti Fútbol</p>
        <h1 className="mt-2 text-3xl font-black">Gestión de partidos</h1>
        <p className="mt-3 text-slate-600">
          Pantalla inicial lista para conectar con Supabase y roles de usuario.
        </p>
        <a href="/" className="mt-6 inline-flex rounded-xl bg-emerald-700 px-4 py-2 font-bold text-white">
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
