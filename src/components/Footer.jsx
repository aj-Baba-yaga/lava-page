export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <p className="text-sm font-medium text-neutral-200">
              Slow Travelling
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Stories from intentional journeys.
            </p>
          </div>

          {/* Footer navigation */}
          <nav className="flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Articles
            </a>
            <a href="#" className="hover:text-white transition">
              Subscribe
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
