import { buildImageUrl } from "@utils/buildImageUrl";

interface ImageSize {
  width: number;
  height: number;
}

interface Source {
  size: ImageSize;
  breakpoint: string;
  url: string;
}

interface Fallback {
  url: string;
  width: number;
  height: number;
}

interface ResponsiveImageProps {
  sources: Source[];
  fallback: Fallback;
  alt?: string;
  className?: string;
  format?: string;
  quality?: string;
}

export function ResponsiveImage({
  sources,
  fallback,
  alt = "image",
  className = "",
  format = "auto",
  quality = "auto",
}: ResponsiveImageProps) {
  return (
    <picture className={className}>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={buildImageUrl({
            url: source.url,
            format,
            quality,
            ...source.size,
          })}
          media={source.breakpoint}
        />
      ))}

      <img
        src={buildImageUrl({
          url: fallback.url,
          format,
          quality,
          width: fallback.width,
          height: fallback.height,
        })}
        width={fallback.width}
        height={fallback.height}
        alt={alt}
        className="w-full"
      />
    </picture>
  );
}
