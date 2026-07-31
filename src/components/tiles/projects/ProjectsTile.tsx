import { ChevronRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ProjectCard from "@/components/tiles/projects/ProjectCard";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function TechStackTile({ className }: { className?: string }) {
	return (
		<Card
			className={cn(
				"flex flex-col bg-accent/15 transition-colors hover:bg-accent/25",
				className
			)}
		>
			<CardHeader>
				<CardTitle className="flex items-center gap-1 font-bold font-mono text-xs">
					<ChevronRight className="text-primary" size={18} />
					<p className="text-muted-foreground tracking-widest">
						{"04 // PERSONAL PROJECTS"}
					</p>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col gap-2 md:flex-row">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</CardContent>
		</Card>
	);
}
