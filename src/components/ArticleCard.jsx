export default function ArticleCard({ title, meta, image, href = "#" }) {
  return (
    <a href={href} className="group block h-full" aria-label={title}>
      <article className="relative h-full overflow-hidden rounded-lg">
        {/* Image layer */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay layer */}
        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30"></div>

        {/* Content layer */}
        <div className="relative flex h-full items-end">
          <div className="p-6">
            <h3 className="text-xl font-medium leading-snug text-white">
              {title}
            </h3>

            <p className="mt-2 text-sm text-white/70">{meta}</p>
          </div>
        </div>
      </article>
    </a>
  );
}
