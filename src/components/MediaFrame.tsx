import { useState } from 'react';
import { Layers } from 'lucide-react';

interface MediaFrameProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  imgClassName?: string;
}

export function MediaFrame({
  src,
  alt,
  title,
  className = '',
  imgClassName = '',
}: MediaFrameProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-zinc-200/70 ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-transform duration-300 ease-out ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="w-full h-full min-h-[240px] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-100 via-zinc-200/80 to-zinc-300/60 p-6 text-center"
        >
          <Layers className="w-7 h-7 text-zinc-500" aria-hidden="true" />
          <span className="font-display text-sm font-medium text-zinc-700 max-w-[24ch]">
            {title}
          </span>
        </div>
      )}
    </div>
  );
}
