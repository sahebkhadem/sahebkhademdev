import IdentityTile from "@/components/tiles/IdentityTile";
import ProjectsTile from "@/components/tiles/projects/ProjectsTile";
import StatusTile from "@/components/tiles/StatusTile";
import TechStackTile from "@/components/tiles/tech-stack/TechStackTile";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col gap-4 p-4 md:grid md:h-screen md:grid-cols-12 md:grid-rows-12">
			<IdentityTile className="md:col-span-7 md:row-span-4" />
			<StatusTile className="md:col-span-5 md:row-span-4" />
			<TechStackTile className="md:col-span-4 md:row-span-8" />
			<ProjectsTile className="md:col-span-8 md:row-span-5" />
		</main>
	);
}
