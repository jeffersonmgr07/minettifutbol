"use client";

import { useMemo, useState } from "react";
import { delegateMockData, type DelegateMockMatch, type DelegateMockPlayer } from "@/data/delegateMock";

type PlayerRole = "titular" | "suplente";

type PlayerSelection = {
  playerId: string;
  role: PlayerRole;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function PlayerPhoto({ player, size = "large" }: { player: DelegateMockPlayer; size?: "small" | "large" }) {
  const [failed, setFailed] = useState(false);
  const sizeClass = size === "large" ? "h-24 w-24" : "h-12 w-12";

  return (
    <div className={`relative flex ${sizeClass} shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-emerald-100 text-sm font-black text-emerald-800`}>
      {!failed ? (
        <img
          src={player.photoUrl}
          alt={`Foto de ${player.fullName}`}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{getInitials(player.fullName)}</span>
      )}
    </div>
  );
}

function PlayerMiniCard({ player, onRemove }: { player: DelegateMockPlayer; onRemove: () => void }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3">
      <PlayerPhoto player={player} size="small" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-black">{player.fullName}</p>
        <p className="text-xs text-slate-500">DNI {player.dni}</p>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="rounded-xl bg-red-50 px-3 py-2 text-xs font-black text-red-700"
      >
        Quitar
      </button>
    </div>
  );
}

export default function DelegateAccessDemo() {
  const { access, team, players, upcomingMatches } = delegateMockData;
  const [activeMatchId, setActiveMatchId] = useState(upcomingMatches[0]?.id ?? "");
  const [selectedPlayerId, setSelectedPlayerId] = useState("");
  const [selectedRole, setSelectedRole] = useState<PlayerRole>("titular");
  const [selections, setSelections] = useState<PlayerSelection[]>([]);
  const [saved, setSaved] = useState(false);

  const activeMatch = upcomingMatches.find((match) => match.id === activeMatchId) ?? upcomingMatches[0];
  const selectedIds = useMemo(() => new Set(selections.map((item) => item.playerId)), [selections]);
  const titulares = selections.filter((item) => item.role === "titular");
  const suplentes = selections.filter((item) => item.role === "suplente");
  const availablePlayers = players.filter((player) => player.status === "aprobado" && !selectedIds.has(player.id));
  const selectedPlayer = availablePlayers.find((player) => player.id === selectedPlayerId) ?? availablePlayers[0];
  const canAddSelected = Boolean(selectedPlayer) && !(selectedRole === "titular" && titulares.length >= team.playersOnField);

  function chooseMatch(match: DelegateMockMatch) {
    setActiveMatchId(match.id);
    setSelections([]);
    setSelectedPlayerId("");
    setSelectedRole("titular");
    setSaved(false);
  }

  function addPlayer() {
    if (!selectedPlayer || !canAddSelected) return;
    setSelections((current) => [...current, { playerId: selectedPlayer.id, role: selectedRole }]);
    setSelectedPlayerId("");
    setSaved(false);
  }

  function removePlayer(playerId: string) {
    setSelections((current) => current.filter((item) => item.playerId !== playerId));
    setSaved(false);
  }

  function playerById(playerId: string) {
    return players.find((player) => player.id === playerId);
  }

  function saveRoster() {
    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="bg-gradient-to-br from-emerald-950 via-emerald-800 to-lime-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-lime-200">Acceso único de delegado · Simulación</p>
              <h1 className="mt-2 text-3xl font-black md:text-5xl">Convocatoria de partido</h1>
              <p className="mt-3 max-w-3xl text-emerald-50">
                Demo para que el delegado de {team.name} seleccione titulares y suplentes desde su nómina aprobada.
              </p>
            </div>
            <a href="/" className="rounded-xl bg-white px-4 py-3 text-sm font-black text-emerald-800 shadow">
              Volver al portal público
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
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
              <p className="text-xs font-bold uppercase text-slate-500">Regla de cancha</p>
              <p className="mt-1 font-bold">{team.playersOnField} titulares · mínimo {team.minPlayersOnField}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-slate-500">Acceso</p>
              <p className="mt-1 truncate font-mono text-xs">{access.token}</p>
            </div>
          </div>
        </article>

        <section className="mt-8">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Paso 1</p>
              <h2 className="text-2xl font-black">Elige el partido para abrir la convocatoria</h2>
              <p className="mt-1 text-sm text-slate-600">El delegado verá sus próximos partidos como tarjetas. Al elegir uno, se abre la convocatoria de ese encuentro.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {upcomingMatches.map((match) => {
              const isActive = activeMatch?.id === match.id;
              const rival = match.home === team.name ? match.away : match.home;
              return (
                <button
                  type="button"
                  key={match.id}
                  onClick={() => chooseMatch(match)}
                  className={`rounded-3xl border p-5 text-left shadow-sm transition ${isActive ? "border-emerald-700 bg-emerald-700 text-white" : "border-slate-200 bg-white hover:border-emerald-500"}`}
                >
                  <p className={`text-xs font-black uppercase ${isActive ? "text-lime-100" : "text-emerald-700"}`}>{match.dateLabel}</p>
                  <h3 className="mt-2 text-xl font-black">vs {rival}</h3>
                  <p className={`mt-3 text-sm ${isActive ? "text-emerald-50" : "text-slate-600"}`}>{match.date} · {match.field} · {match.time}</p>
                  <p className={`mt-2 text-sm font-bold ${isActive ? "text-white" : "text-slate-800"}`}>{match.home} vs {match.away}</p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <article className="rounded-3xl bg-white p-6 shadow">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Paso 2</p>
                <h2 className="text-2xl font-black">Nómina general de jugadores</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Las fotos se cargan automáticamente desde <strong>/public/img/jugadores/</strong> usando el DNI del jugador en formato PNG.
                </p>
              </div>
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">
                {players.filter((player) => player.status === "aprobado").length}/{team.maxRosterPlayers} aprobados
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {players.map((player) => (
                <div key={player.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex gap-4">
                    <PlayerPhoto player={player} />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-black leading-tight">{player.fullName}</h3>
                      <div className="mt-3 grid gap-2 text-sm">
                        <p><span className="font-black text-slate-500">DNI:</span> {player.dni}</p>
                        <p><span className="font-black text-slate-500">Nacimiento:</span> {formatDate(player.birthDate)}</p>
                        <p><span className="font-black text-slate-500">Año:</span> {player.birthYear}</p>
                      </div>
                      <span className="mt-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
                        {player.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="space-y-6">
            <article className="rounded-3xl bg-white p-6 shadow">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">Paso 3</p>
                <h2 className="text-2xl font-black">Agregar jugadores al partido</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Partido seleccionado: <strong>{activeMatch?.home} vs {activeMatch?.away}</strong>
                </p>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_150px]">
                <label className="block">
                  <span className="text-sm font-black text-slate-700">Jugador disponible</span>
                  <select
                    value={selectedPlayer?.id ?? ""}
                    onChange={(event) => {
                      setSelectedPlayerId(event.target.value);
                      setSaved(false);
                    }}
                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-bold outline-none focus:border-emerald-600"
                  >
                    {availablePlayers.length === 0 ? (
                      <option value="">No quedan jugadores disponibles</option>
                    ) : (
                      availablePlayers.map((player) => (
                        <option key={player.id} value={player.id}>{player.fullName} · DNI {player.dni}</option>
                      ))
                    )}
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

              {selectedPlayer ? (
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex gap-3">
                    <PlayerPhoto player={selectedPlayer} size="small" />
                    <div className="min-w-0 flex-1">
                      <p className="font-black">{selectedPlayer.fullName}</p>
                      <p className="text-sm text-slate-500">DNI {selectedPlayer.dni} · Nac. {formatDate(selectedPlayer.birthDate)}</p>
                    </div>
                  </div>
                </div>
              ) : null}

              {selectedRole === "titular" && titulares.length >= team.playersOnField ? (
                <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-700">
                  Ya se alcanzó el máximo de {team.playersOnField} titulares para {team.categoryName}. Puedes agregar más jugadores como suplentes.
                </p>
              ) : null}

              <button
                type="button"
                onClick={addPlayer}
                disabled={!canAddSelected}
                className="mt-5 w-full rounded-2xl bg-emerald-700 px-5 py-4 font-black text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Agregar al partido
              </button>
            </article>

            <article className="rounded-3xl bg-white p-6 shadow">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black">Convocatoria</h2>
                  <p className="mt-1 text-sm text-slate-600">Titulares y suplentes separados para revisión rápida.</p>
                </div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700">
                  {selections.length} elegidos
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="text-2xl font-black text-emerald-800">{titulares.length}</p>
                  <p className="text-xs font-bold text-emerald-700">Titulares</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl font-black text-slate-800">{suplentes.length}</p>
                  <p className="text-xs font-bold text-slate-600">Suplentes</p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4">
                  <p className="text-2xl font-black text-amber-800">{Math.max(team.minPlayersOnField - titulares.length, 0)}</p>
                  <p className="text-xs font-bold text-amber-700">Faltan min.</p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="mb-3 text-lg font-black">Titulares</h3>
                  <div className="space-y-3">
                    {titulares.length === 0 ? (
                      <p className="rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-500">Todavía no agregaste titulares.</p>
                    ) : titulares.map((item) => {
                      const player = playerById(item.playerId);
                      if (!player) return null;
                      return <PlayerMiniCard key={item.playerId} player={player} onRemove={() => removePlayer(item.playerId)} />;
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-black">Suplentes</h3>
                  <div className="space-y-3">
                    {suplentes.length === 0 ? (
                      <p className="rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-500">Todavía no agregaste suplentes.</p>
                    ) : suplentes.map((item) => {
                      const player = playerById(item.playerId);
                      if (!player) return null;
                      return <PlayerMiniCard key={item.playerId} player={player} onRemove={() => removePlayer(item.playerId)} />;
                    })}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={saveRoster}
                disabled={titulares.length < team.minPlayersOnField}
                className="mt-6 w-full rounded-2xl bg-slate-900 px-5 py-4 font-black text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Guardar convocatoria
              </button>

              {saved ? (
                <div className="mt-4 rounded-2xl bg-emerald-100 p-4 text-sm font-bold text-emerald-800">
                  Convocatoria guardada en modo simulación. En la versión con Supabase, esta lista quedará disponible para mesa de control y árbitro.
                </div>
              ) : null}
            </article>
          </aside>
        </section>
      </section>
    </main>
  );
}
