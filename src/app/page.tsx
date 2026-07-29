import IdentityTile from "@/components/tiles/IdentityTile";

export default function Home() {
	return (
		<main className="grid h-screen w-full grid-cols-1 gap-4 p-4 md:grid-cols-12 md:grid-rows-12">
			<IdentityTile className="md:col-span-7 md:row-span-4" />
		</main>
	);
}
