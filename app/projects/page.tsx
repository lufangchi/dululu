export const metadata = {
  title: "projects — fangchi",
};

type Project = {
  name: string;
  tag: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "SQL practice tool",
    tag: "build",
    description:
      "A small side project to drill SQL query patterns faster than static problem sets. Replace with your real project details.",
  },
];

export default function Projects() {
  return (
    <>
      <p className="section-title">projects</p>
      <div className="post-list">
        {projects.map((project) => (
          <div className="post-row" key={project.name}>
            <span
              className="tag"
              style={{ background: "#DFE6E9", color: "#2E4650" }}
            >
              {project.tag}
            </span>
            <span className="post-title">
              {project.name} — {project.description}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
