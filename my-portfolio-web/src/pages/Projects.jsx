import Carousel from '../components/Carousel';
import motivationCover from '../assets/MotivationCover.png';
import peskyKittensLogo from '../assets/peskyKittensLogo.jpg';

const projects = [
	{
		title: 'Motivation',
		description: [
			'A pixel-art 2D puzzle game about regaining motivation by tidying up your environment and recovering lost memories.',
			'Tidy every room by dragging and dropping items to their right spot. Every room contains certain objects that will trigger memories, gather every one of these items and you will reveal the story!',
			'Made entirely for a one-week long jam hosted on itch.io, music and art are also mine. This was my first experience working under such a tight deadline',
		],
		gifUrl: motivationCover,
		projectUrl: 'https://shinn-dev.itch.io/motivation',
		githubUrl: 'https://github.com/shinndev24/motivation-game',
	},
	{
		title: 'Pesky Kittens',
		description: '2D platformer made with academic purposes and my first ever finished game. Collect coins, overcome obstacles and defeat enemies. First touch with saving points, life system, enemies and dialogue.',	
		gifUrl: peskyKittensLogo,
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
