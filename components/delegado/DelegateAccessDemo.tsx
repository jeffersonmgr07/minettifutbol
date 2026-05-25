"use client";

import { useMemo, useState } from "react";
import { delegateMockData, type DelegateMockPlayer } from "@/data/delegateMock";

type PlayerRole = "titular" | "suplente";

type Selection = {
  playerId: string;
  role: PlayerRole;
  validated: boolean;
};

const initialSelections: Selection[] = [
  { playerId: "guerreros-sub6-01", role: "titular", validated: true },
  { playerId: "guerreros-sub6-02", role: "titular", validated: true },
  { playerId: "guerreros-sub6-03", role: "titular", validated: true },
  { playerId: "guerreros-sub6-04", role: "titular", validated: true },
  { playerId: "guerreros-sub6-05", role: "titular", validated: true },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function maskDni(dni: string) {
  return `${dni.slice(0, 2)}****${dni.slice(-2)}`;
}

export default function DelegateAccessDemo() {
  const { team, match, players, access } = delegateMockData;
  const [selectedPlayerId, setSelectedPlayerId] = useState(players[5]?.id ?? "");
  const [selectedRole, setSelectedRole] = useState<PlayerRole>("titular");
  const [validatedPlayerId, setValidatedPlayerId] = useState<string | null>(null);
  const [selections, setSelections] = useState<Selection[]>(initialSelections);
  const [saved, setSaved] = useState(false);

  const selectedPlayer = players.find((player) => player.id === selectedPlayerId);

  const selectedIds = useMemo(() => new Set(selections.map((item) => item.playerId)), [selections]);
  const titulares = selections.filter((item) => item.role === "titular");
  const suplentes = selections.filter((item) => item.role === "suplente");
  const canAddSelected = Boolean(
    selectedPlayer &&
      selectedPlayer.status === "aprobado" &&
      validatedPlayerId === selectedPlayer.id &&
      !selectedIds.has(selectedPlayer.id) &&
      (selectedRole === "suplente" || titulares.length < team.playersOnField)
  );

  const selectedRosterPlayers = selections
    .map((selection) => ({ selection, player: players.find((player) => player.id === selection.playerId) }))
    .filter((item): item is { selection: Selection; player: DelegateMockPlayer } => Boolean(item.player));

  function validateSelectedPlayer() {
    if (!selectedPlayer || selectedPlayer.status !== "aprobado") return;
    setValidatedPlayerId(selectedPlayer.id);
    setSaved(false);
  }

  function addPlayer() {
    if (!canAddSelected || !selectedPlayer) return;
    setSelections((current) => [
      ...current,
      { playerId: selectedPlayer.id, role: selectedRole, validated: true },
    ]);
    setValidatedPlayerId(null);
    setSaved(false);
  }

  function removePlayer(playerId: string) {
    setSelections((current) => current.filter((item) => item.playerId !== playerId));
    setSaved(false);
  }

  function saveRoster() {
    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-lime-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-lime-200">Acceso único de delegado · Simulación</p>
              <h1 className="mt-2 text-3xl font-black md:text-5xl">Convocatoria de partido</h1>
              <p className="mt-3 max-w-3xl text-emerald-50">
                Demo para que el delegado de {team.name} seleccione titulares y suplentes del padrón real cargado antes del partido.
              </p>
            </div>
            <a href="/" className="rounded-xl bg-white px-4 py-3 text-sm font-black text-emerald-800 shadow">
              Volver al portal público
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <article className="rounded-3xl bg-white p-6 shadow">
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">Equipo</p>
                <h2 className="mt-1 text-xl font-black">{team.name}</h2>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">Categoría</p>
                <p className="mt-1 font-bold">{team.categoryName} · {team.group}</p>
                <p className="text-xs text-slate-500">Delegado: {team.delegateName}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">Partido</p>
                <p className="mt-1 font-bold">{match.home} vs {match.away}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-slate-500">Acceso</p>
                <p className="mt-1 truncate font-mono text-xs">{access.token}</p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-black">1. Registrar / revisar nómina del equipo</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Padrón real cargado de {team.name}. Solo los jugadores aprobados pueden ser convocados.
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">
                {players.filter((player) => player.status === "aprobado").length}/{team.maxRosterPlayers} aprobados · {team.registeredPlayers} registrados
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {players.map((player) => (
                <div key={player.id} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-black text-emerald-800">
                    {getInitials(player.fullName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-black">#{player.number} {player.fullName}</p>
                    <p className="text-xs text-slate-500">DNI {maskDni(player.dni)} · Nac. {player.birthYear}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${player.status === "aprobado" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                    {player.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-2xl font-black">2. Elegir jugador para el partido</h2>
            <p className="mt-1 text-sm text-slate-600">
              Simulación del flujo: seleccionar jugador, validar QR/DNI y recién agregarlo como titular o suplente.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_180px]">
              <label className="block">
                <span className="text-sm font-black text-slate-700">Jugador del padrón aprobado</span>
                <select
                  value={selectedPlayerId}
                  onChange={(event) => {
                    setSelectedPlayerId(event.target.value);
                    setValidatedPlayerId(null);
                    setSaved(false);
                  }}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-bold outline-none focus:border-emerald-600"
                >
                  {players.map((player) => (
                    <option key={player.id} value={player.id}>
                      #{player.number} {player.fullName} · {player.status}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-black text-slate-700">Rol</span>
                <select
                  value={selectedRole}
                  onChange={(event) => setSelectedRole(event.target.value as PlayerRole)}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-bold outline-none focus:border-emerald-600"
                >
                  <option value="titular">Titular</option>
                  <option value="suplente">Suplente</option>
                </select>
              </label>
            </div>

            {selectedPlayer && (
              <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">Jugador seleccionado</p>
                    <h3 className="mt-1 text-lg font-black">#{selectedPlayer.number} {selectedPlayer.fullName}</h3>
                    <p className="text-sm text-slate-600">QR simulado: <span className="font-mono font-bold">{selectedPlayer.qrCode}</span></p>
                    {selectedPlayer.status !== "aprobado" && (
                      <p className="mt-2 rounded-xl bg-amber-100 px-3 py-2 text-sm font-bold text-amber-800">
                        Este jugador está observado. No puede ser agregado hasta que la organización lo apruebe.
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={validateSelectedPlayer}
                      disabled={selectedPlayer.status !== "aprobado"}
                      className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      Validar QR/DNI
                    </button>
                    <button
                      type="button"
                      onClick={addPlayer}
                      disabled={!canAddSelected}
                      className="rounded-xl bg-emerald-700 px-4 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      Agregar al partido
                    </button>
                  </div>
                </div>

                {validatedPlayerId === selectedPlayer.id && (
                  <p className="mt-3 rounded-xl bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-800">
                    Validación correcta. El botón “Agregar al partido” está habilitado para este jugador.
                  </p>
                )}
                {selectedIds.has(selectedPlayer.id) && (
                  <p className="mt-3 rounded-xl bg-red-100 px-3 py-2 text-sm font-bold text-red-800">
                    Este jugador ya fue agregado a la convocatoria.
                  </p>
                )}
                {selectedRole === "titular" && titulares.length >= team.playersOnField && !selectedIds.has(selectedPlayer.id) && (
                  <p className="mt-3 rounded-xl bg-red-100 px-3 py-2 text-sm font-bold text-red-800">
                    Ya se alcanzó el máximo de {team.playersOnField} titulares para {team.categoryName}.
                  </p>
                )}
              </div>
            )}
          </article>
        </div>

        <aside className="space-y-6">
          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-2xl font-black">3. Relación del partido</h2>
            <p className="mt-1 text-sm text-slate-600">
              Para {team.categoryName}: {team.playersOnField} titulares, mínimo {team.minPlayersOnField} en cancha.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-2xl font-black text-emerald-800">{titulares.length}</p>
                <p className="text-xs font-bold text-slate-500">Titulares</p>
              </div>
              <div className="rounded-2xl bg-sky-50 p-4">
                <p className="text-2xl font-black text-sky-800">{suplentes.length}</p>
                <p className="text-xs font-bold text-slate-500">Suplentes</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-2xl font-black text-slate-800">{selections.length}</p>
                <p className="text-xs font-bold text-slate-500">Total</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {selectedRosterPlayers.map(({ selection, player }) => (
                <div key={player.id} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-black">
                    {player.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-black">{player.fullName}</p>
                    <p className="text-xs font-bold uppercase text-slate-500">{selection.role} · validado</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removePlayer(player.id)}
                    className="rounded-lg bg-red-50 px-3 py-2 text-xs font-black text-red-700"
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={saveRoster}
              disabled={titulares.length < team.minPlayersOnField}
              className="mt-5 w-full rounded-2xl bg-emerald-700 px-5 py-4 font-black text-white shadow disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Guardar convocatoria
            </button>

            {titulares.length < team.minPlayersOnField && (
              <p className="mt-3 rounded-xl bg-red-100 px-3 py-2 text-sm font-bold text-red-800">
                Faltan titulares: se requieren al menos {team.minPlayersOnField} jugadores para evitar W.O.
              </p>
            )}

            {saved && (
              <div className="mt-4 rounded-2xl bg-emerald-100 p-4 text-emerald-900">
                <p className="font-black">Convocatoria guardada en modo simulación.</p>
                <p className="mt-1 text-sm font-semibold">
                  En la versión real, esta relación se enviará a la mesa de control y al árbitro del partido.
                </p>
              </div>
            )}
          </article>

          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-xl font-black">Reglas aplicadas en esta demo</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="rounded-xl bg-slate-50 p-3">Solo se puede elegir jugadores del padrón del equipo.</li>
              <li className="rounded-xl bg-slate-50 p-3">El jugador debe estar aprobado para aparecer como habilitado.</li>
              <li className="rounded-xl bg-slate-50 p-3">El botón agregar se habilita recién después de validar QR/DNI.</li>
              <li className="rounded-xl bg-slate-50 p-3">Un jugador no puede repetirse como titular y suplente.</li>
              <li className="rounded-xl bg-slate-50 p-3">Para Sub 6 se consideran 7 titulares y mínimo 5 en cancha.</li>
            </ul>
          </article>
        </aside>
      </section>
    </main>
  );
}
