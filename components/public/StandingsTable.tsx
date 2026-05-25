type Row = {
  position: number;
  team: string;
  group?: string;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  dg: number;
  pts: number;
};

export default function StandingsTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead className="bg-emerald-800 text-white">
          <tr>
            <th className="p-3 text-left">Pos</th>
            <th className="p-3 text-left">Equipo</th>
            <th className="p-3">Grupo</th>
            <th className="p-3">PJ</th>
            <th className="p-3">PG</th>
            <th className="p-3">PE</th>
            <th className="p-3">PP</th>
            <th className="p-3">GF</th>
            <th className="p-3">GC</th>
            <th className="p-3">DG</th>
            <th className="p-3">PTS</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.group}-${row.team}`} className="border-b last:border-b-0">
              <td className="p-3 font-black">{row.position}</td>
              <td className="p-3 font-bold">{row.team}</td>
              <td className="p-3 text-center text-slate-500">{row.group}</td>
              <td className="p-3 text-center">{row.pj}</td>
              <td className="p-3 text-center">{row.pg}</td>
              <td className="p-3 text-center">{row.pe}</td>
              <td className="p-3 text-center">{row.pp}</td>
              <td className="p-3 text-center">{row.gf}</td>
              <td className="p-3 text-center">{row.gc}</td>
              <td className="p-3 text-center">{row.dg > 0 ? `+${row.dg}` : row.dg}</td>
              <td className="p-3 text-center font-black">{row.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
