import { Image, Source } from "@unpic/react";
type ComponentProps = {
	src: string;
	alt: string;
};

const Component = ({ src, alt }: ComponentProps) => {
	return (
		<picture>
			<Source src={src} type="image/webp" layout="fullWidth" cdn="directus" />
			<Image src={src} cdn="directus" layout="fullWidth" alt={alt} />
		</picture>
	);
};

export default Component;
