export function CardMovie2({
  title,
  description,
  src,
  onClick,
}: {
  title: string
  description: string
  src?: string
  onClick?: () => void
}) {
  return (
    <div
      className="group relative h-96 cursor-pointer overflow-hidden rounded-lg md:h-56"
      onClick={onClick}
    >
      <img
        src={src}
        alt="Movie"
        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/50 to-transparent p-3">
        <div className="flex flex-col">
          <h1 className="text-sm font-medium text-white">{title}</h1>
          <p className="text-xs text-neutral-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

export function CardMovie({
  title,
  description,
  src,
}: {
  title: string
  description: string
  src?: string
}) {
  return (
    <div>
      <img
        src={src}
        alt="Movie"
        className="h-64 w-full rounded-lg object-cover"
      />
      <div className="mt-2 flex flex-col">
        <h1 className="text-sm font-medium text-black">{title}</h1>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  )
}
