import { useState } from 'react';

import commercial1 from '../common/img/commercial-1.jpeg';
import commercial2 from '../common/img/commercial-2.jpeg';
import commercial3 from '../common/img/commercial-3.jpeg';
import commercial4 from '../common/img/commercial-4.jpeg';
import commercial5 from '../common/img/commercial-5.jpeg';
import commercial6 from '../common/img/commercial-6.jpeg';
import commercial7 from '../common/img/commercial-7.jpeg';
import commercial  from '../common/img/commercial.jpg';

import indoor1  from '../common/img/indoor-1.jpeg';
import indoor2  from '../common/img/indoor-2.jpeg';
import indoor3  from '../common/img/indoor-3.jpeg';
import indoor4  from '../common/img/indoor-4.jpeg';
import indoor5  from '../common/img/indoor-5.jpeg';
import indoor6  from '../common/img/indoor-6.jpeg';
import indoor7  from '../common/img/indoor-7.jpeg';
import indoor8  from '../common/img/indoor-8.jpeg';
import indoor9  from '../common/img/indoor-9.jpeg';
import indoor10 from '../common/img/indoor-10.jpeg';
import indoor11 from '../common/img/indoor-11.jpeg';
import indoor12 from '../common/img/indoor-12.jpeg';
import indoor13 from '../common/img/indoor-13.jpeg';
import indoor14 from '../common/img/indoor-14.jpeg';
import indoor15 from '../common/img/indoor-15.jpeg';
import indoor16 from '../common/img/indoor-16.jpeg';

import cucumber from '../common/img/cucumber.jpeg';
import cucumber2 from '../common/img/cucumber-2.jpeg';
import capsicum    from '../common/img/capsicum.jpg';
import cherryTomato from '../common/img/cherry-tomato.jpg';
import lettuce     from '../common/img/lettuce.jpg';
import microgreens from '../common/img/microgreens.jpg';

import polyhouse from '../common/img/poly-house.jpg';

import service1 from '../common/img/service-1.jpeg';
import service2 from '../common/img/serivice-2.jpeg';
import service3 from '../common/img/service-3.jpeg';
import service5 from '../common/img/service-5.jpeg';
import service6 from '../common/img/service-6.jpeg';

const items = [
  // Commercial Farming
  { img: commercial,  category: 'Commercial Farming', title: 'Commercial Hydroponic Farm' },
  { img: commercial1, category: 'Commercial Farming', title: 'Commercial Farm Setup' },
  { img: commercial2, category: 'Commercial Farming', title: 'Farm Infrastructure' },
  { img: commercial3, category: 'Commercial Farming', title: 'Large Scale Production' },
  { img: commercial4, category: 'Commercial Farming', title: 'Commercial Growing System' },
  { img: commercial5, category: 'Commercial Farming', title: 'Farm Operations' },
  { img: commercial6, category: 'Commercial Farming', title: 'Hydroponic Channels' },
  { img: commercial7, category: 'Commercial Farming', title: 'Commercial Harvest' },

  // Indoor & Vertical Farming
  { img: indoor1,  category: 'Indoor & Vertical Farming', title: 'Indoor Vertical Farm' },
  { img: indoor2,  category: 'Indoor & Vertical Farming', title: 'Indoor Growing Setup' },
  { img: indoor3,  category: 'Indoor & Vertical Farming', title: 'Vertical Rack System' },
  { img: indoor4,  category: 'Indoor & Vertical Farming', title: 'LED Grow Lights' },
  { img: indoor5,  category: 'Indoor & Vertical Farming', title: 'Indoor Seedling Stage' },
  { img: indoor6,  category: 'Indoor & Vertical Farming', title: 'Controlled Environment' },
  { img: indoor7,  category: 'Indoor & Vertical Farming', title: 'Indoor Nutrient System' },
  { img: indoor8,  category: 'Indoor & Vertical Farming', title: 'Indoor Crop Production' },
  { img: indoor9,  category: 'Indoor & Vertical Farming', title: 'Grow Room Setup' },
  { img: indoor10, category: 'Indoor & Vertical Farming', title: 'Multi-Tier Growing' },
  { img: indoor11, category: 'Indoor & Vertical Farming', title: 'Indoor Farm View' },
  { img: indoor12, category: 'Indoor & Vertical Farming', title: 'Precision Farming' },
  { img: indoor13, category: 'Indoor & Vertical Farming', title: 'Indoor Greens' },
  { img: indoor14, category: 'Indoor & Vertical Farming', title: 'Indoor Harvest' },
  { img: indoor15, category: 'Indoor & Vertical Farming', title: 'Indoor Operations' },
  { img: indoor16, category: 'Indoor & Vertical Farming', title: 'Indoor Farm Production' },

  // Home & Terrace Gardening
  { img: cucumber, category: 'Home & Terrace Gardening', title: 'Fresh Cucumber' },
  { img: cucumber2, category: 'Home & Terrace Gardening', title: 'Fresh Cucumber' },
  { img: capsicum, category: 'Home & Terrace Gardening', title: 'Capsicum' },
  { img: cherryTomato, category: 'Home & Terrace Gardening', title: 'CherryTomato' },
  { img: microgreens, category: 'Home & Terrace Gardening', title: 'Microgreens' },
  { img: lettuce,category: 'Home & Terrace Gardening', title: 'Lettuce' },

  // Polyhouse & Greenhouse
  { img: polyhouse,     category: 'Polyhouse & Greenhouse', title: 'Poly house' },

  // Hydroponic Home Kits
  { img: service1,  category: 'Hydroponic Home Kits', title: 'Strawberry Farm' },
  { img: service2, category: 'Hydroponic Home Kits', title: 'Strawberry Plants' },
  { img: service3, category: 'Hydroponic Home Kits', title: 'Strawberry Growth Stage' },
  { img: service5, category: 'Hydroponic Home Kits', title: 'Strawberry Flowering' },
  { img: service6, category: 'Hydroponic Home Kits', title: 'Strawberry Harvest' },

  // Automation & Smart Solutions
  { img: indoor14, category: 'Automation & Smart Solutions', title: 'Smart Farm Monitoring' },
  { img: indoor15, category: 'Automation & Smart Solutions', title: 'Automated Nutrient System' },
  { img: indoor16, category: 'Automation & Smart Solutions', title: 'Smart Grow Setup' },
];

const categories = ['All', 'Commercial Farming', 'Indoor & Vertical Farming', 'Home & Terrace Gardening', 'Polyhouse & Greenhouse', 'Hydroponic Home Kits'];

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
          <div className="col-lg-3 col-md-4 col-sm-6" key={i} data-aos="fade-up" data-aos-delay={i * 40}>
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
