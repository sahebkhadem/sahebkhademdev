import { ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

export default function IdentityTile({ className }: { className?: string }) {
	return (
		<Card
			className={cn(
				"flex flex-col justify-between bg-accent/15 transition-colors hover:bg-accent/25",
				className
			)}
		>
			<CardHeader>
				<CardTitle className="flex items-center gap-1 font-bold font-mono text-xs">
					<ChevronRight className="text-primary" size={18} />
					<p className="text-muted-foreground tracking-widest">
						{"01 // IDENTITY"}
					</p>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<h1 className="font-extrabold text-2xl text-foreground">
					Saheb Khadem
				</h1>
				<h2 className="my-1 font-bold font-sans text-primary text-xl">
					Web Developer
				</h2>
				<p className="font-mono text-muted-foreground text-sm">
					Self-taught developer building production web apps with
					Next.js, React, and TypeScript. Comfortable with full-stack
					work: REST APIs, databases, and modern UI.
				</p>
			</CardContent>
			<CardFooter className="flex flex-col items-start gap-2 md:flex-row">
				<Badge className="rounded-md p-3 text-primary-foreground text-xs">
					Seeking Junioer / Entry Role
				</Badge>
				<Badge className="rounded-md p-3 text-primary-foreground text-xs">
					Full-Stack Capable
				</Badge>
			</CardFooter>
		</Card>
	);
}
