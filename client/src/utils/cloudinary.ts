import { Cloudinary } from "@cloudinary/url-gen/index";

export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

export default cld;
