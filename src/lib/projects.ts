export type Project = {
	id: string;
	title: string;
	description: string;
	tags: string[];
	liveDemoLink: string;
	gitHubLink: string;
};

export const projects: Project[] = [
	{
		id: "prospera-finance-tracker",
		title: "Prospera",
		description:
			"Personal finance tracker with accounts, budgets, categories, and auto-calculated spending.",
		tags: [
			"nextjs",
			"react",
			"typescript",
			"postgresql",
			"tailwindcss",
			"shadcn/ui",
			"zod",
			"drizzle"
		],
		liveDemoLink: "https://prospera-beryl.vercel.app/",
		gitHubLink: "https://github.com/sahebkhadem/prospera"
	},
	{
		id: "risto-anime-tracker",
		title: "Risto",
		description:
			"Anime watchlist tracker with status management, filtering, and a clean modern interface.",
		tags: [
			"nextjs",
			"react",
			"typescript",
			"mongodb",
			"tailwindcss",
			"shadcn/ui",
			"zod",
			"zustand",
			"prisma"
		],
		liveDemoLink: "https://risto-peach.vercel.app/",
		gitHubLink: "https://github.com/sahebkhadem/risto"
	}
];
