import { ChevronRight } from "lucide-react";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

import TechBadge from "@/components/tiles/tech-stack/TechBadge";
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
						{"03 // TECH STACK"}
					</p>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col gap-2">
				{/*Languages*/}
				<div className="flex flex-col gap-2">
					<p className="font-bold font-sans text-secondary text-xs">
						Languages
					</p>
					<ul className="flex list-none flex-wrap gap-2">
						<TechBadge variant="primary">TypeScript</TechBadge>
						<TechBadge variant="primary">JavaScript</TechBadge>
						<TechBadge variant="secondary">HTML</TechBadge>
						<TechBadge variant="secondary">CSS</TechBadge>
						<TechBadge variant="secondary">SQL</TechBadge>
					</ul>
				</div>

				{/*Frontend*/}
				<div className="flex flex-col gap-2">
					<p className="font-bold font-sans text-secondary text-xs">
						Frontend
					</p>
					<ul className="flex list-none flex-wrap gap-2">
						<TechBadge variant="primary">Next.js</TechBadge>
						<TechBadge variant="primary">React</TechBadge>
						<TechBadge variant="secondary">Tailwind CSS</TechBadge>
						<TechBadge variant="secondary">shadcn/ui</TechBadge>
						<TechBadge variant="secondary">CSS Modules</TechBadge>
					</ul>
				</div>

				{/*Backend & Database*/}
				<div className="flex flex-col gap-2">
					<p className="font-bold font-sans text-secondary text-xs">
						{"Backend & Database"}
					</p>
					<ul className="flex list-none flex-wrap gap-2">
						<TechBadge variant="secondary">Node.js</TechBadge>
						<TechBadge variant="secondary">Express</TechBadge>
						<TechBadge variant="secondary">REST APIs</TechBadge>
						<TechBadge variant="secondary">PostgreSQL</TechBadge>
						<TechBadge variant="secondary">MongoDB</TechBadge>
						<TechBadge variant="secondary">Prisma ORM</TechBadge>
						<TechBadge variant="secondary">Drizzle ORM</TechBadge>
					</ul>
				</div>

				{/*Tools & Workflow*/}
				<div className="flex flex-col gap-2">
					<p className="font-bold font-sans text-secondary text-xs">
						{"Tools & Workflow"}
					</p>
					<ul className="flex list-none flex-wrap gap-2">
						<TechBadge variant="secondary">
							{"Git & GitHub"}
						</TechBadge>
						<TechBadge variant="secondary">Vite</TechBadge>
						<TechBadge variant="secondary">Postman</TechBadge>
						<TechBadge variant="secondary">Vercel</TechBadge>
					</ul>
				</div>
			</CardContent>
			<CardFooter>
				<p className="text-muted-foreground text-xs">
					Frontend-focused, backend-equipped
				</p>
			</CardFooter>
		</Card>
	);
}
