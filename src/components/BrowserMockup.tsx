import { cn } from '@/lib/utils'

interface BrowserMockupProps {
  url?: string
  imageUrl: string
  imageAlt?: string
  className?: string
}

export function BrowserMockup({
  url = 'localhost:3000',
  imageUrl,
  imageAlt = 'Project screenshot',
  className,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-zinc-200 shadow-md',
        className
      )}
    >
      {/* Chrome bar */}
      <div className="flex h-9 items-center gap-2 bg-zinc-100 px-4">
        {/* Traffic light dots */}
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: '#FF5F57' }}
          />
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: '#FFBD2E' }}
          />
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: '#28C840' }}
          />
        </div>

        {/* Fake URL bar */}
        <div className="mx-3 flex flex-1 items-center justify-center rounded-full border border-zinc-200 bg-white/80 px-3 py-0.5">
          <span className="max-w-full truncate text-center text-[11px] text-zinc-400">
            {url}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="block w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  )
}
