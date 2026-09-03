import { useEffect, useState } from 'react';
import motivationVideo from '../assets/motivationVideo.mp4';
import peskyKittens from '../assets/pesky Kittens.mp4';

const heroSlides = [
	{ type: 'video', src: motivationVideo },
	{ type: 'video', src: peskyKittens },
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
				<p>Junior Game dev based in Spain</p>
			</div>
		</section>
	);
}
