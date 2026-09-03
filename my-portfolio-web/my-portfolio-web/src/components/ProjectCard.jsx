export default function ProjectCard({ title, description, gifUrl, projectUrl, codeUrl }) {
  return (
    <div className="project-card">
      <img src={gifUrl} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-buttons">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="btn">
            Play
          </a>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn">
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
