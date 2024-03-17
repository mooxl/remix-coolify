import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader = async () => {
	const date = new Date().toISOString().split("T")[1].split(".")[0];
	await new Promise((resolve) => setTimeout(resolve, 10000));
	return { date };
};

export const headers: HeadersFunction = () => {
	return {
		"cache-control": "public, max-age=1, stale-while-revalidate=8640",
	};
};

export default function Index() {
	const data = useLoaderData<typeof loader>();
	return (
		<main>
			<h1>Server creation - {data.date}</h1>
		</main>
	);
}
