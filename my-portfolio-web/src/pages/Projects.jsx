import ProjectCard from '../components/ProjectCard';

const projects = [
	{
		title: '2D Platfomer',
		description: 'Prototipo jugable con movimiento, salto y niveles sencillos.',
		gifUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
		projectUrl: '#',
		codeUrl: '#',
	},
	{
		title: 'Web portfolio',
		description: 'Sitio personal con navegación, presentación y contacto.',
		gifUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
		projectUrl: '#',
		codeUrl: '#',
	},
];

export default function Projects() {
	return (
	<section id="projects" className="page-section">
			<div className="content-card">
				<p className="eyebrow">Projects</p>
				<h2 className="section-title">Some of my works</h2>
			</div>
			<div className="projects-grid">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</section>
	);
}
