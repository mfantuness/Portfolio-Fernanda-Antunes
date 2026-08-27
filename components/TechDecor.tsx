export function TechDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-0 h-[620px] bg-[linear-gradient(to_right,rgba(163,70,98,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(163,70,98,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute right-4 top-24 hidden h-48 w-48 rounded-full border border-rose-200/80 md:block motion-safe:animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute left-8 top-72 hidden h-24 w-24 rounded-full border border-slate-200 md:block motion-safe:animate-[float_9s_ease-in-out_infinite_reverse]" />
      <div className="absolute -left-16 top-[42%] h-36 w-56 rotate-[-18deg] rounded-[61%_39%_55%_45%/42%_58%_42%_58%] bg-rose-100/50 blur-2xl md:h-48 md:w-72" />
      <div className="absolute -right-20 top-[68%] h-40 w-64 rotate-[14deg] rounded-[38%_62%_44%_56%/56%_40%_60%_44%] bg-rose-200/35 blur-2xl" />
      <div className="absolute right-[14%] top-64 hidden rounded-2xl border border-rose-100 bg-slate-50/70 px-4 py-3 font-mono text-xs text-rose-800 shadow-sm lg:block motion-safe:animate-[float_7s_ease-in-out_infinite]">
        {"<portfolio />"}
      </div>
    </div>
  );
}
