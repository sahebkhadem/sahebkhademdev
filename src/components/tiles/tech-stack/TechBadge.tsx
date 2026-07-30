interface TechBadgeProps {
	variant: "primary" | "secondary";
	children: React.ReactNode;
}

export default function TechBadge({ variant, children }: TechBadgeProps) {
	if (variant === "secondary") {
		return (
			<li className="rounded-md border border-secondary bg-secondary/15 p-1 px-2 font-bold font-mono text-foreground text-xs">
				{children}
			</li>
		);
	}

	return (
		<li className="rounded-md border border-primary bg-secondary/15 p-1 px-2 font-bold font-mono text-primary text-xs">
			{children}
		</li>
	);
}
