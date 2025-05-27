import { ResponsiveImage } from "@components/ResponsiveImage";
import { IimageGrid } from "@custom-types/components/image-grid";
import { pictureBreakpoints } from "@utils/breakpoints";
import { twMerge } from "tailwind-merge";
import { IComponentProps } from "@custom-types/components";

interface IImageGridProps extends IComponentProps {
  data: IimageGrid;
}

export function ImageGrid({ data, className }: IImageGridProps) {
  if (!data || !data.items || !data.isActive) return null;

  return (
    <div
      className={twMerge(
        "flex flex-col md:flex-row  md:justify-center gap-y-4 gap-x-8 w-full",
        className
      )}
    >
      <div className="relative">
        <div
          className={twMerge(
            "absolute top-8 left-6 md:top-12 md:left-12 flex flex-col gap-y-3",
            `text-[var(--text-color)] font-spaceGrotesk font-medium`
          )}
          style={
            {
              "--text-color": data.items.full_image.textColor,
            } as React.CSSProperties
          }
        >
          <h3 className="text-xl">{data.items.full_image.title}</h3>
          <a
            href={data.items.full_image.link}
            className="text-sm underline underline-offset-4"
          >
            {data.items.full_image.subtitle}
          </a>
        </div>
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
      </div>

      <div className="flex flex-col gap-y-4 md:justify-between">
        <div
          className="relative text-[var(--text-color)] font-spaceGrotesk font-medium"
          style={
            {
              "--text-color": data.items.half_image_first.textColor,
            } as React.CSSProperties
          }
        >
          <div
            className={twMerge(
              "flex flex-col gap-y-3",
              "absolute bottom-6 left-6 md:bottom-8 md:left-8"
            )}
          >
            <h3 className="text-xl">{data.items.half_image_first.title}</h3>
            <a
              href={data.items.half_image_first.link}
              className="text-sm underline underline-offset-4"
            >
              {data.items.half_image_first.subtitle}
            </a>
          </div>
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

        <div
          className="relative text-[var(--text-color)] font-spaceGrotesk font-medium"
          style={
            {
              "--text-color": data.items.half_image_second.textColor,
            } as React.CSSProperties
          }
        >
          <div
            className={twMerge(
              "flex flex-col gap-y-3",
              "absolute bottom-6 left-6 md:bottom-8 md:left-8"
            )}
          >
            <h3 className="text-xl">{data.items.half_image_second.title}</h3>
            <a
              href={data.items.half_image_second.link}
              className="text-sm underline underline-offset-4"
            >
              {data.items.half_image_second.subtitle}
            </a>
          </div>
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
