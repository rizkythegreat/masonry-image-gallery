import { useState } from "react";

import { classNames } from "../../utils/classNames";
import image1 from "../../assets/architecture-1.jpeg";
import image2 from "../../assets/landscape-3.jpeg";
import image3 from "../../assets/neon-3.jpeg";
import image4 from "../../assets/architecture-4.jpeg";
import image5 from "../../assets/neon-2.jpeg";
import image6 from "../../assets/landscape-1.jpeg";
import image7 from "../../assets/neon-4.jpeg";
import image8 from "../../assets/architecture-2.jpeg";
import image9 from "../../assets/neon-1.jpeg";
import image10 from "../../assets/architecture-3.jpeg";
import image11 from "../../assets/landscape-2.jpeg";

import "./MasonryGallery.css";

const images = [
  {
    src: image1,
    alt: "Metal pattern on side of a building",
    ratio: "landscape",
    active: 1,
  },
  {
    src: image2,
    alt: "Valley between mountains during fall",
    ratio: "square",
    active: 3,
  },
  {
    src: image3,
    alt: "Gas station at night lit by neon sign",
    ratio: "portrait",
    active: 2,
  },
  {
    src: image4,
    alt: "Hall inside building featuring a tree",
    ratio: "square",
    active: 1,
  },
  {
    src: image5,
    alt: "Foggy night with hotel neon sign in background",
    ratio: "portrait",
    active: 2,
  },
  {
    src: image6,
    alt: "Lake with mountains in the background",
    ratio: "landscape",
    active: 3,
  },
  {
    src: image7,
    alt: "City sidewalk on a snowy night",
    ratio: "portrait",
    active: 2,
  },
  {
    src: image8,
    alt: "Person going down stairs in building atrium",
    ratio: "landscape",
    active: 1,
  },
  {
    src: image9,
    alt: "People walking in NYC at night",
    ratio: "landscape",
    active: 2,
  },
  {
    src: image10,
    alt: "Dark stairs with blue lights",
    ratio: "portrait",
    active: 1,
  },
  {
    src: image11,
    alt: "Side of mountain with sparse trees",
    ratio: "landscape",
    active: 3,
  },
];

const MasonryGallery = () => {
  const [activeId, setActiveId] = useState(0);
  return (
    <section className="masonry-container">
      <header className="masonry-header">
        <div className="masonry-info">
          <h2 className="masonry-title">Latest works</h2>
          <p className="masonry-subtitle">
            The masonry gallery image, for your masonry heart.
          </p>
        </div>
        <nav className="masonry-filter">
          <button
            type="button"
            onClick={() => setActiveId(0)}
            className={
              activeId === 0
                ? "masonry-filter-active"
                : "masonry-filter-inactive"
            }
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setActiveId(1)}
            className={
              activeId === 1
                ? "masonry-filter-active"
                : "masonry-filter-inactive"
            }
          >
            Architecture
          </button>
          <button
            type="button"
            onClick={() => setActiveId(2)}
            className={
              activeId === 2
                ? "masonry-filter-active"
                : "masonry-filter-inactive"
            }
          >
            Neon
          </button>
          <button
            type="button"
            onClick={() => setActiveId(3)}
            className={
              activeId === 3
                ? "masonry-filter-active"
                : "masonry-filter-inactive"
            }
          >
            Landscape
          </button>
        </nav>
      </header>
      <div className="masonry-gallery">
        {images.map(({ ratio, src, alt, active }) => (
          <figure
            className={classNames(
              activeId === 0 || activeId === active
                ? "masonry-gallery-visible"
                : "masonry-gallery-hidden",
              `masonry-${ratio}`
            )}
          >
            <img src={src} alt={alt} />
          </figure>
        ))}
      </div>
    </section>
  );
};
export default MasonryGallery;
