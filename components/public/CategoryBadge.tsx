export default function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase text-emerald-800">
      {children}
    </span>
  );
}
