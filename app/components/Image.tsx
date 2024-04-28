import { Source, Image as UnpicImage } from "@unpic/react";
type ComponentProps = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: ComponentProps) => {
  return (
    <picture>
      <Source src={src} type="image/webp" layout="fullWidth" cdn="directus" />
      <UnpicImage src={src} cdn="directus" layout="fullWidth" alt={alt} />
    </picture>
  );
};

export default Image;
