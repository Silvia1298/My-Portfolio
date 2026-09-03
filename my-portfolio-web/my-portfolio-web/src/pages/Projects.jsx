import Carousel from '../components/Carousel';

const projects = [
	{
		title: '2D Platfomer',
		description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
		gifUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
		projectUrl: '#',
		codeUrl: '#',
	},
	{
		title: 'Web portfolio',
		description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',	
		gifUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
		projectUrl: '#',
		codeUrl: '#',
	},
];

export default function Projects() {
	return (
		<section id="projects" className="projects">
			<p className="eyebrow">Portfolio</p>
			<div className="content-card-projects">
				<div className="projects-layout">
					<h1 className="section-title">Some of my projects</h1>
					<div className="projects-grid">
						<Carousel items={projects} />
					</div>
				</div>
			</div>
		</section>
	);
}
