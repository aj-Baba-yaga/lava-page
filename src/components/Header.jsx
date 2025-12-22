import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header className="relative z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-medium">Slow Travelling</div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
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

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-8 w-8 flex-col justify-center gap-1 md:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Menu panel */}
          <div className="fixed inset-x-0 top-0 bg-neutral-900">
            <div className="mx-auto max-w-6xl px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">Slow Travelling</span>
              </div>

              <nav className="mt-8 flex flex-col gap-6 text-lg">
                <a href="#" onClick={() => setOpen(false)}>
                  About
                </a>
                <a href="#" onClick={() => setOpen(false)}>
                  Articles
                </a>
                <a href="#" onClick={() => setOpen(false)}>
                  Subscribe
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
