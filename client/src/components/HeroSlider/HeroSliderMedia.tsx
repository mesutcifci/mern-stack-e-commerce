import { ResponsiveImage } from "@components/ResponsiveImage";
import { ISliderItem } from "@custom-types/components/slider-component";
import { pictureBreakpoints } from "@utils/breakpoints";

interface IHeroSliderMediaProps {
  item: ISliderItem;
}

export function HeroSliderMedia({ item }: IHeroSliderMediaProps) {
  const desktopMediaSlug = item.media.desktopMedia.url;
  const mobileMediaSlug = item.media.mobileMedia.url;

  const mediaType = item.media.desktopMedia.type;

  if (mediaType === "image") {
    const sources = [
      {
        size: { width: 2560, height: 1422 },
        breakpoint: pictureBreakpoints.xl,
        url: desktopMediaSlug,
      },
      {
        size: { width: 1440, height: 800 },
        breakpoint: pictureBreakpoints.lg,
        url: desktopMediaSlug,
      },
      {
        size: { width: 1024, height: 1196 },
        breakpoint: pictureBreakpoints.md,
        url: mobileMediaSlug,
      },
      {
        size: { width: 768, height: 897 },
        breakpoint: pictureBreakpoints.xs,
        url: mobileMediaSlug,
      },
    ];

    const fallback = {
      url: mobileMediaSlug,
      width: 425,
      height: 496,
    };

    return (
      <ResponsiveImage sources={sources} fallback={fallback} alt={item.title} />
    );
  }

  // TODO: implement video type
  // if (mediaType === "video") {
  // }

  return null;
}
