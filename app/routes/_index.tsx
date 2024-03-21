import Image from "@/components/Image";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export const loader = async () => {
	const date = new Date().toISOString().split("T")[1].split(".")[0];
	//await new Promise((resolve) => setTimeout(resolve, 10000));
	return { date };
};

export default function Index() {
	const data = useLoaderData<typeof loader>();
	return (
		<main>
			<h1 className="">Server creation - {data.date}</h1>
			<Image
				src="https://cms.mooxl.de/assets/f0d200c6-0e9a-4807-a3e9-f01c1cbf333c"
				alt="A cat with a hat"
			/>
			<h2>Test</h2>
		</main>
	);
}
