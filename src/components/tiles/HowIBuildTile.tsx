import { ChevronRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

export default function IdentityTile({ className }: { className?: string }) {
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
						{"05 // HOW I BUILD"}
					</p>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<CardContent>
					<ul className="space-y-3 font-sans text-sm">
						<li className="flex items-start">
							<span className="text-primary before:mr-2 before:text-xl before:leading-none before:content-['•']"></span>
							<div>
								<span className="mr-1 font-light">
									Type Safety:
								</span>
								<span className="font-bold">
									Strict TypeScript usage across client
									components and server routes.
								</span>
							</div>
						</li>
						<li className="flex items-start">
							<span className="text-primary before:mr-2 before:text-xl before:leading-none before:content-['•']"></span>
							<div>
								<span className="mr-1 font-light">
									Full-Stack Flow:
								</span>
								<span className="font-bold">
									Building structured REST APIs and querying
									databases cleanly.
								</span>
							</div>
						</li>
						<li className="flex items-start">
							<span className="text-primary before:mr-2 before:text-xl before:leading-none before:content-['•']"></span>
							<div>
								<span className="mr-1 font-light">
									Responsive & Accessible:
								</span>
								<span className="font-bold">
									Mobile-first styling with semantic HTML
									markup.
								</span>
							</div>
						</li>
					</ul>
				</CardContent>
			</CardContent>
		</Card>
	);
}
