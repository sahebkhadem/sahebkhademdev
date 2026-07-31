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
			"Smart, simple, and high-performance personal finance tracker.",
		tags: [
			"nextjs",
			"react",
			"typescript",
			"postgresql",
			"tailwindcss",
			"shadcn/ui",
			"zod",
			"prisma"
		],
		liveDemoLink: "https://prospera-beryl.vercel.app/",
		gitHubLink: "https://github.com/sahebkhadem/prospera"
	},
	{
		id: "risto-anime-tracker",
		title: "Risto",
		description:
			"A modern anime tracker for enthusiasts.Track, organize, and manage your anime watchlist with a beautiful, intuitive interface.",
		tags: [
			"nextjs",
			"react",
			"typescript",
			"mongodb",
			"tailwindcss",
			"shadcn/ui",
			"zod",
			"zustand"
		],
		liveDemoLink: "https://risto-peach.vercel.app/",
		gitHubLink: "https://github.com/sahebkhadem/risto"
	}
];
