const Loading = () => {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-6xl animate-pulse">
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <div className="mb-3 h-4 w-28 rounded-full bg-slate-700" />
          <div className="h-10 w-72 rounded-lg bg-slate-700" />
          <div className="mt-4 h-4 w-full max-w-2xl rounded bg-slate-800" />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-9 w-24 rounded-full border border-slate-700 bg-slate-900"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <div className="h-52 w-full bg-slate-800" />
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 rounded bg-slate-700" />
                  <div className="h-6 w-16 rounded-full bg-slate-700" />
                </div>
                <div className="h-6 w-11/12 rounded bg-slate-700" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-slate-800" />
                  <div className="h-3 w-10/12 rounded bg-slate-800" />
                </div>
                <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
                  <div className="h-9 w-9 rounded-full bg-slate-700" />
                  <div className="space-y-2">
                    <div className="h-3 w-24 rounded bg-slate-700" />
                    <div className="h-3 w-16 rounded bg-slate-800" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Loading;
