export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="flex min-h-[70vh] items-center">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Slow travelling
              </h1>

              <p className="mt-4 text-base md:text-lg leading-relaxed text-white/80">
                A mindful way to explore the world, focusing on depth, presence,
                and experience.
              </p>

              <div className="mt-8 h-px w-16 bg-white/70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
