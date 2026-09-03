import { useEffect, useState } from 'react';

export default function Carousel({ items = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const item = items[index];

  return (
    <div className="projects-carousel">
      <button className="carousel-nav prev" onClick={prev} aria-label="Anterior">
        ‹
      </button>

      <div className="carousel-slide">
        <div className="carousel-media">
          <img src={item.gifUrl} alt={item.title} />
        </div>

        <div className="carousel-content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="project-buttons">
            <a href={item.projectUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Try it out
            </a>
            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Github Page
            </a>
          </div>
        </div>
      </div>

      <button className="carousel-nav next" onClick={next} aria-label="Siguiente">
        ›
      </button>
    </div>
  );
}
