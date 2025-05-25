import { ResponsiveImage } from "@components/ResponsiveImage";
import { ISliderItem } from "@custom-types/components/slider-component";

const SIZES = {
  xl: { width: 2560, height: 1422 },
  lg: { width: 1440, height: 800 },
  md: { width: 1024, height: 1196 },
  xs: { width: 768, height: 897 },
  fallback: { width: 425, height: 496 },
};

interface IHeroSliderMediaProps {
  item: ISliderItem;
}

export function HeroSliderMedia({ item }: IHeroSliderMediaProps) {
  const desktopMediaSlug = item.media.desktopMedia.url;
  const mobileMediaSlug = item.media.mobileMedia.url;

  const mediaType = item.media.desktopMedia.type;

  if (mediaType === "image") {
    return (
      <ResponsiveImage
        desktopUrl={desktopMediaSlug}
        mobileUrl={mobileMediaSlug}
        alt={item.title}
        sizes={SIZES}
      />
    );
  }

  // TODO: implement video type
  // if (mediaType === "video") {
  // }

  return null;
}
