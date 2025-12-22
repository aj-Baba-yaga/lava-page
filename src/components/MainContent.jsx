import ArticleCard from "./ArticleCard";

export default function MainContent() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[3fr_1fr]">
          {/* Main articles column */}
          <main>
            <header className="mb-12">
              <h2 className="text-3xl md:text-4xl font-medium leading-snug">
                Latest articles
              </h2>
              <p className="mt-4 text-sm text-neutral-400">
                Stories and reflections from slow journeys around the world.
              </p>
            </header>

            {/* Articles grid placeholder */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="aspect-4/5">
                <ArticleCard
                  title="Exploring Lake Baikal"
                  meta="Russia · 7 min read"
                  image="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                />
              </div>

              <div className="aspect-4/5">
                <ArticleCard
                  title="A Week in Patagonia"
                  meta="Chile · 5 min read"
                  image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                />
              </div>

              <div className="aspect-4/5">
                <ArticleCard
                  title="Desert Nights in Morocco"
                  meta="Morocco · 6 min read"
                  image="https://images.unsplash.com/photo-1765871321198-30fffc41e605?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </main>

          {/* Sidebar column */}
          <aside className="flex flex-col gap-16">
            {/* About block */}
            <section>
              <h4 className="text-lg font-medium leading-snug">About</h4>

              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                A journal about slow, intentional travel — focusing on culture,
                landscapes, and meaningful experiences rather than rushing
                through destinations.
              </p>
            </section>

            {/* Latest posts list */}
            <section>
              <h4 className="text-lg font-medium leading-snug">Latest posts</h4>

              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li className="hover:text-white transition">
                  Exploring Lake Baikal
                </li>
                <li className="hover:text-white transition">
                  A Week in Patagonia
                </li>
                <li className="hover:text-white transition">
                  Desert Nights in Morocco
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
