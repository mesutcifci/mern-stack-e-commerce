import { ResponsiveImage } from "@components/ResponsiveImage";
import { IimageGrid } from "@custom-types/components/image-grid";
import { pictureBreakpoints } from "@utils/breakpoints";
import { twMerge } from "tailwind-merge";

interface IImageGridProps {
  data: IimageGrid;
  className?: string;
}

export function ImageGrid({ data, className }: IImageGridProps) {
  if (!data || !data.items || !data.isActive) return null;

  console.log("data", data);

  return (
    <div
      className={twMerge(
        "flex flex-col md:flex-row  md:justify-center gap-y-4 gap-x-8 w-full",
        className
      )}
    >
      <ResponsiveImage
        sources={[
          {
            size: { width: 652, height: 790 },
            breakpoint: pictureBreakpoints.md,
            url: data.items.full_image.desktopImage,
          },
          {
            size: { width: 768, height: 1024 },
            breakpoint: pictureBreakpoints.xs,
            url: data.items.full_image.mobileImage,
          },
        ]}
        fallback={{
          url: data.items.full_image.mobileImage,
          width: 343,
          height: 453,
        }}
      />

      <div className="flex flex-col gap-y-4 md:justify-between">
        <div>
          <ResponsiveImage
            sources={[
              {
                size: { width: 652, height: 379 },
                breakpoint: pictureBreakpoints.md,
                url: data.items.half_image_first.desktopImage,
              },
              {
                size: { width: 768, height: 488 },
                breakpoint: pictureBreakpoints.xs,
                url: data.items.half_image_first.mobileImage,
              },
            ]}
            fallback={{
              url: data.items.half_image_first.mobileImage,
              width: 343,
              height: 218,
            }}
          />
        </div>

        <div>
          <ResponsiveImage
            sources={[
              {
                size: { width: 652, height: 379 },
                breakpoint: pictureBreakpoints.md,
                url: data.items.half_image_second.desktopImage,
              },
              {
                size: { width: 768, height: 488 },
                breakpoint: pictureBreakpoints.xs,
                url: data.items.half_image_second.mobileImage,
              },
            ]}
            fallback={{
              url: data.items.half_image_second.mobileImage,
              width: 343,
              height: 218,
            }}
          />
        </div>
      </div>
    </div>
  );
}
