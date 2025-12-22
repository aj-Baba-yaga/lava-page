export default function Subscribe() {
  return (
    <section className="mt-24 border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
        <div className="mx-auto max-w-xl py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-medium leading-snug">
            Join the journey
          </h3>

          <p className="mt-4 text-sm text-neutral-400">
            Occasional stories, no noise. Unsubscribe anytime.
          </p>

          <form className="mt-8 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="rounded bg-neutral-800 px-4 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600"
            />
            <button
              type="submit"
              className="rounded bg-neutral-700 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
