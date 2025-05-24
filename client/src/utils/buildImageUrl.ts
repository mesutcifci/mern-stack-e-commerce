import { Resize } from "@cloudinary/url-gen/actions/resize";
import { cld } from "@utils/cloudinary";

interface IBuildImageUrlOptions {
  url: string;
  format?: string;
  quality?: string;
  width?: number;
  height?: number;
}

export const buildImageUrl = ({
  url,
  format = "auto",
  quality = "auto",
  width,
  height,
}: IBuildImageUrlOptions) => {
  let image = cld.image(url).format(format).quality(quality);

  if (width && height) {
    image = image.resize(Resize.fill(width, height));
  }

  return image.toURL();
};
