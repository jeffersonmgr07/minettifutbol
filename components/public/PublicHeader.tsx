export default function PublicHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-black text-emerald-800">
          Minetti Fútbol
        </a>
        <nav className="hidden gap-5 text-sm font-bold text-slate-700 md:flex">
          <a href="/publico/fixture">Fixture</a>
          <a href="/publico/resultados">Resultados</a>
          <a href="/publico/tabla-posiciones">Tablas</a>
          <a href="/publico/goleadores">Goleadores</a>
          <a href="/publico/equipos">Equipos</a>
        </nav>
        <a href="/login" className="rounded-xl bg-emerald-700 px-4 py-2 text-sm font-bold text-white">
          Ingresar
        </a>
      </div>
    </header>
  );
}
