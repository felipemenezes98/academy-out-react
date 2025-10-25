export function Info({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="mb-3 text-sm text-neutral-500">{description}</p>
    </div>
  )
}
