import { Source, Image as UnpicImage } from "@unpic/react";

type ImageProps = {
	src: string;
	alt: string;
};

const Image = ({ src, alt }: ImageProps) => (
	<picture>
		<Source src={src} type="image/webp" layout="fullWidth" cdn="directus" />
		<UnpicImage
			src={src}
			cdn="directus"
			layout="fullWidth"
			background="auto"
			alt={alt}
		/>
	</picture>
);

export default Image;
