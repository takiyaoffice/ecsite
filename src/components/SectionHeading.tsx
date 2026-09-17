export function SectionHeading({ children }: { children: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <h1 className="text-2xl tracking-[0.25em] text-ink md:text-3xl">
        {children}
      </h1>
      <span className="mt-4 block h-px w-10 bg-ink/40" />
    </div>
  )
}
