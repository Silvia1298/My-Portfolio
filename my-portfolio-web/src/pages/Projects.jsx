import Carousel from '../components/Carousel';
import motivationCover from '../assets/MotivationCover.png';
import ff7landscape from '../assets/ff7 landscape.jpg';

const projects = [
	{
		title: 'Motivation',
		description: 'A game about regaining motivation by recovering memories while changing your sorroundings. Submission for a week jam hosted on itch.io',
		gifUrl: motivationCover,
		projectUrl: 'https://shinn-dev.itch.io/motivation',
		githubUrl: 'https://github.com/shinndev24/motivation-game',
	},
	{
		title: 'Web portfolio',
		description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',	
		gifUrl: ff7landscape,
		projectUrl: '#',
		githubUrl: '#',
	},
];

export default function Projects() {
	return (
		<section id="projects" className="projects">
			<p className="eyebrow">Portfolio</p>
			<div className="content-card-projects">
				<div className="projects-layout">
					<h1 className="section-title">My projects</h1>
					<div className="projects-grid">
						<Carousel items={projects} />
					</div>
				</div>
			</div>
		</section>
	);
}
