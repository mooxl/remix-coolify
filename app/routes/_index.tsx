import type { HeadersFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader = async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000));
	return null;
};

export const headers: HeadersFunction = () => {
	return {
		"cache-control": "public, max-age=1, stale-while-revalidate=8640",
	};
};

export default function Index() {
	return (
		<main>
			<h1>This is world</h1>
		</main>
	);
}
