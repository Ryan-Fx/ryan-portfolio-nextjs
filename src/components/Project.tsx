import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Website (Ryan Store)",
    description:
      "This full-stack application was built and developed using Next JS, Tailwind CSS, Prisma and PostgreSQL.",
    image: "/images/projects/store.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://ryannn-store.vercel.app",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "This full-stack application was built and developed using Next JS, Tailwind CSS, Prisma and PostgreSQL. This portfolio uses responsive design so that its appearance will adjust to the user's screen size.",
    image: "/images/projects/portfolio.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ryann-devv.vercel.app",
  },
];

export default function Project() {
  return (
    <section className="scroll-mt-24 px-8 lg:px-14 xl:px-[220px]" id="projects">
      <h2
        className={cn(
          "text-2xl md:text-4xl font-bold text-center mb-10 text-blue-500 dark:text-primary",
          karla.className
        )}
      >
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 md:gap-9">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            previewUrl={project.previewUrl}
            tags={project.tag}
          />
        ))}
      </div>
    </section>
  );
}
