import Link from "next/link";

import { ArrowUpRight, ChevronRight, GitBranch, Mail } from "lucide-react";

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
						{"06 // CONNECT"}
					</p>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<CardContent className="p-0">
					<div className="flex flex-col gap-2">
						<Link
							href="mailto:saheb1379@gmail.com"
							className="flex items-center justify-between gap-2 rounded-md border border-accent bg-accent/50 p-2 transition-colors hover:bg-accent/75"
						>
							<div className="flex gap-2">
								<Mail size={18} />
								<span>Email</span>
							</div>

							<ArrowUpRight size={18} />
						</Link>
						<Link
							href="https://github.com/sahebkhadem"
							target="_blank"
							className="flex items-center justify-between gap-2 rounded-md border border-accent bg-accent/50 p-2 transition-colors hover:bg-accent/75"
							rel="noopener"
						>
							<div className="flex gap-2">
								<GitBranch size={18} />
								<span>GitHub</span>
							</div>

							<ArrowUpRight size={18} />
						</Link>
					</div>
				</CardContent>
			</CardContent>
		</Card>
	);
}
