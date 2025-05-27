import { ResponsiveImage } from "@components/ResponsiveImage";
import { ISingleImage } from "@custom-types/components/single-image";
import { pictureBreakpoints } from "@utils/breakpoints";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "@icons/ArrowRight";

interface ISingleImageProps {
  data: ISingleImage;
  className?: string;
}

export function SingleImage({ data, className }: ISingleImageProps) {
  if (!data || !data.isActive) return null;

  return (
    <div className={twMerge("relative border border-red-500", className)}>
      <div
        className={twMerge(
          "absolute top-8 px-4 md:px-8 z-10 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-y-4",
          "text-[var(--text-color)] font-spaceGrotesk font-medium"
        )}
        style={
          {
            "--text-color": data.textColor || "#000000",
          } as React.CSSProperties
        }
      >
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[1.75rem] leading-[2.125rem] md:text-4xl ">
            {data.title}
          </h3>
          <p className="text-sm md:text-lg font-inter">{data.description}</p>
        </div>
        <a
          href={data.link}
          className="text-base md:text-lg flex items-center border-b w-max"
        >
          <span>{data.linkText}</span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>

      <ResponsiveImage
        sources={[
          {
            size: { width: 1440, height: 532 },
            breakpoint: pictureBreakpoints.lg,
            url: data.desktopImage,
          },
          {
            size: { width: 1024, height: 715 },
            breakpoint: pictureBreakpoints.md,
            url: data.mobileImage,
          },
          {
            size: { width: 768, height: 536 },
            breakpoint: pictureBreakpoints.xs,
            url: data.mobileImage,
          },
        ]}
        fallback={{
          url: data.mobileImage,
          width: 358,
          height: 432,
        }}
        alt={data.title}
      />
    </div>
  );
}
