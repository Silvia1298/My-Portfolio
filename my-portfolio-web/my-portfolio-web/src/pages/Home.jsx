import { useEffect, useState } from 'react';

const heroSlides = [
	{ type: 'image', src: '/assets/ff7 landscape.jpg' },
	{ type: 'video', src: '/assets/pesky Kittens.mp4' },
	{ type: 'image', src: '/assets/botw zelda.png' },
];

export default function Home() {
	const [activeSlide, setActiveSlide] = useState(0);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
		}, 5000);

		return () => window.clearInterval(timer);
	}, []);

	return (
		<section id="home" className="hero">
			<div className="hero-carousel" aria-hidden="true">
				{heroSlides.map((slide, index) => (
					<div
						key={slide.src}
						className={`hero-slide${index === activeSlide ? ' is-active' : ''}`}
					>
						{slide.type === 'video' ? (
							<video
								className="hero-slide-media"
								src={slide.src}
								autoPlay
								muted
								loop
								playsInline
								preload="metadata"
							/>
						) : (
							<img className="hero-slide-media" src={slide.src} alt="" />
						)}
					</div>
				))}
			</div>
			<div className="hero-overlay" aria-hidden="true" />
			<div className="container hero-content">
				<h1>Silvia de Abia</h1>
				<p>Videogame programmer & developer based in Spain</p>
			</div>
		</section>
	);
}
