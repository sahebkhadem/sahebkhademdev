import { ChevronRight } from "lucide-react";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

import { cn } from "@/lib/utils";

export default function StatusTile({ className }: { className?: string }) {
	return (
		<Card
			className={cn(
				"flex flex-col justify-between bg-accent/15 transition-colors hover:bg-accent/25",
				className
			)}
		>
			<CardHeader className="flex justify-between">
				<CardTitle className="flex items-center gap-1 font-bold font-mono text-xs">
					<ChevronRight className="text-primary" size={18} />
					<p className="text-muted-foreground tracking-widest">
						{"02 // STATUS"}
					</p>
				</CardTitle>

				<div className="flex items-center justify-center gap-2 rounded-md border border-primary bg-primary/10 px-4 py-2">
					<div className="relative flex h-3 w-3 items-center justify-center">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
						<span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-primary"></span>
					</div>
					<p className="font-bold font-mono text-primary">
						Available for Hire
					</p>
				</div>
			</CardHeader>
			<CardContent>
				<ul className="list-none font-sans text-sm">
					<li className="flex gap-1">
						<span className="font-light">Target:</span>
						<p className="font-bold">Junior Web Dev / Full-Stack</p>
					</li>
					<li className="flex gap-1">
						<span className="font-light">Location:</span>
						<p className="font-bold">Remote</p>
					</li>
					<li className="flex gap-1">
						<span className="font-light">Focus:</span>
						<p className="font-bold">
							Next.js, React, TypeScript, Tailwind CSS, Node.js
						</p>
					</li>
				</ul>
			</CardContent>
			<CardFooter>
				<p className="text-muted-foreground text-xs">
					Updated this week
				</p>
			</CardFooter>
		</Card>
	);
}
