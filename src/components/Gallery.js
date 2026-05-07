import { useState } from 'react';
import img1 from '../common/img/service-1.jpeg';
import img2 from '../common/img/serivice-2.jpeg';
import img3 from '../common/img/service-3.jpeg';
import img4 from '../common/img/service-4.jpeg';
import img5 from '../common/img/service-5.jpeg';
import img6 from '../common/img/service-6.jpeg';
import img7 from '../common/img/carousel-1.jpeg';
import img8 from '../common/img/carousel-2.jpeg';
import img9 from '../common/img/about.png';

const items = [
  { img: img1, category: 'Commercial', title: 'Commercial Farm Setup' },
  { img: img2, category: 'Indoor', title: 'Indoor Vertical Farm' },
  { img: img3, category: 'Home', title: 'Terrace Garden' },
  { img: img4, category: 'Greenhouse', title: 'Polyhouse System' },
  { img: img5, category: 'Home', title: 'Hydroponic Home Kit' },
  { img: img6, category: 'Smart', title: 'Smart Automation' },
  { img: img7, category: 'Commercial', title: 'Large Scale Farm' },
  { img: img8, category: 'Greenhouse', title: 'Greenhouse Interior' },
  { img: img9, category: 'Indoor', title: 'Grow Setup' },
];

const categories = ['All', ...new Set(items.map((i) => i.category))];

function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Filter Tabs */}
      <div className="gallery-filter d-flex justify-content-center flex-wrap gap-2 mb-5" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="row g-3">
        {filtered.map(({ img, title, category }, i) => (
          <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 60}>
            <div className="gallery-item" onClick={() => setLightbox({ img, title })}>
              <img src={img} alt={title} />
              <div className="gallery-overlay">
                <span className="gallery-cat">{category}</span>
                <h6 className="gallery-title">{title}</h6>
                <i className="bi bi-zoom-in gallery-zoom"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>
              <i className="bi bi-x-lg"></i>
            </button>
            <img src={lightbox.img} alt={lightbox.title} />
            <p className="gallery-lightbox-title">{lightbox.title}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
