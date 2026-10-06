interface BrandMarkProps {
  compact?: boolean;
}

export default function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="flex items-center gap-2 font-outfit" aria-label="Hostify Monitor">
      <span className="relative grid size-8 shrink-0 place-items-center overflow-hidden rounded-xl bg-slate-950 shadow-sm dark:bg-white" aria-hidden="true">
        <span className="absolute inset-x-1.5 bottom-1.5 h-3 rounded-sm bg-cyan-400" />
        <span className="absolute left-2 top-2 size-2 rounded-full bg-violet-400" />
        <span className="absolute right-2 top-2 size-2 rounded-full bg-white dark:bg-slate-950" />
      </span>
      {!compact && <span className="text-sm font-bold tracking-tight"><span className="text-violet-600 dark:text-violet-400">Hostify</span> <span>Monitor</span></span>}
    </span>
  );
}

export { BrandMark };

