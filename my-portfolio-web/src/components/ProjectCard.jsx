export default function ProjectCard({ title, description, projectUrl, githubUrl }) {
  return (
    <div className="project-card">
      <img src className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-buttons">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="btn">
            Try it out
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Github page
          </a>
        </div>
      </div>
    </div>
  );
}
