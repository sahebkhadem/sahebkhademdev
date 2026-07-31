import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
	className?: string;
	project: Project;
}

export default function ProjectCard({ className, project }: ProjectCardProps) {
	return (
		<Card
			className={cn(
				"relative flex flex-1 flex-col bg-accent/50",
				className
			)}
		>
			<CardHeader className="flex flex-1 flex-col justify-between">
				<div>
					<CardTitle className="font-bold font-sans text-primary text-xl">
						{project.title}
					</CardTitle>
					<CardDescription className="font-mono text-accent-foreground text-sm">
						{project.description}
					</CardDescription>
				</div>

				<CardAction className="flex flex-wrap gap-2">
					{project.tags.map((tag) => (
						<Badge
							key={`${project.id}-tag-${tag}`}
							variant="secondary"
							className="text-secondary-foreground"
						>
							#{tag}
						</Badge>
					))}
				</CardAction>
			</CardHeader>

			<CardFooter className="flex gap-2">
				<Link
					href={project.liveDemoLink}
					className="flex items-center justify-center gap-2 rounded-md border border-primary px-2 py-1 text-primary text-xs transition-colors hover:bg-accent/75"
					target="_blank"
				>
					<span>Live Demo</span>
					<ArrowUpRight size={12} />
				</Link>
				<Link
					href={project.gitHubLink}
					className="flex items-center justify-center gap-2 rounded-md border border-primary px-2 py-1 text-primary text-xs transition-colors hover:bg-accent/75"
					target="_blank"
				>
					<span>GitHub</span>
					<ArrowUpRight size={12} />
				</Link>
			</CardFooter>
		</Card>
	);
}
