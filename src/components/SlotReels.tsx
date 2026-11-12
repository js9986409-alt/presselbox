const SYMBOLS = ['7', 'BAR', '★', '◆'];

const REELS = [
  { className: 'reel-strip', symbols: SYMBOLS },
  { className: 'reel-strip reel-strip-delayed', symbols: [...SYMBOLS].reverse() },
  { className: 'reel-strip', symbols: ['BAR', '7', '◆', '★'] },
];

export default function SlotReels() {
  return (
    <div className="rounded-3xl border border-amber-400/30 bg-neutral-900/80 p-4 shadow-2xl shadow-black/50 sm:p-6">
      <div className="grid grid-cols-3 gap-3 rounded-2xl bg-neutral-950 p-3 ring-1 ring-white/10 sm:gap-4 sm:p-4">
        {REELS.map((reel, index) => (
          <div
            key={index}
            className="relative h-32 overflow-hidden rounded-xl bg-gradient-to-b from-neutral-100 to-neutral-300 sm:h-40"
          >
            <div className={reel.className}>
              {[...reel.symbols, ...reel.symbols].map((symbol, i) => (
                <div
                  key={i}
                  className={`flex h-32 items-center justify-center font-black sm:h-40 ${
                    symbol === '7' ? 'text-red-600' : symbol === 'BAR' ? 'text-neutral-900' : 'text-amber-600'
                  } ${symbol === 'BAR' ? 'text-2xl sm:text-3xl' : 'text-5xl sm:text-6xl'}`}
                >
                  {symbol}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-neutral-950/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-neutral-950/70 to-transparent" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between px-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">Sua sorte está girando</span>
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
      </div>
    </div>
  );
}
