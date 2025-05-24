import { pictureBreakpoints } from "@utils/breakpoints";
import { buildImageUrl } from "@utils/buildImageUrl";

interface ImageSize {
  width: number;
  height: number;
}

interface ResponsiveImageProps {
  desktopUrl: string;
  mobileUrl: string;
  alt?: string;
  sizes: {
    xl: ImageSize;
    lg: ImageSize;
    md: ImageSize;
    xs: ImageSize;
    fallback: ImageSize;
  };
  className?: string;
  format?: string;
  quality?: string;
}

export function ResponsiveImage({
  desktopUrl,
  mobileUrl,
  alt = "image",
  sizes,
  className = "",
  format = "auto",
  quality = "auto",
}: ResponsiveImageProps) {
  return (
    <picture className={className}>
      <source
        srcSet={buildImageUrl({
          url: desktopUrl,
          format,
          quality,
          ...sizes.xl,
        })}
        media={pictureBreakpoints.xl}
      />

      <source
        srcSet={buildImageUrl({
          url: desktopUrl,
          format,
          quality,
          ...sizes.lg,
        })}
        media={pictureBreakpoints.lg}
      />

      <source
        srcSet={buildImageUrl({
          url: mobileUrl,
          format,
          quality,
          ...sizes.md,
        })}
        media={pictureBreakpoints.md}
      />

      <source
        srcSet={buildImageUrl({
          url: mobileUrl,
          format,
          quality,
          ...sizes.xs,
        })}
        media={pictureBreakpoints.xs}
      />

      <img
        src={buildImageUrl({
          url: mobileUrl,
          format,
          quality,
          ...sizes.fallback,
        })}
        width={sizes.fallback.width}
        height={sizes.fallback.height}
        alt={alt}
        className="w-full"
      />
    </picture>
  );
}
