import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import img from '../../common/img/indoor-6.jpeg';
import lettuceImg from '../../common/img/indoor-2.jpeg';
import strawberryImg from '../../common/img/strawberry-5.jpeg';
import microgreensImg from '../../common/img/microgreens.jpg';
import edibleFlowerImg from '../../common/img/edible-flower.jpg';
import babycarrot1 from '../../common/img/babycarrot.jpg';
import babyradish from '../../common/img/babyradish.jpg';

const keyAdvantages = [
  { icon: 'bi-globe', label: 'Year-Round Production', desc: 'Grow crops continuously without depending on weather or seasons.' },
  { icon: 'bi-droplet-half', label: 'Water-Efficient Farming', desc: 'Uses significantly less water compared to traditional agriculture.' },
  { icon: 'bi-shield-check', label: 'Cleaner & Safer Produce', desc: 'Controlled environments reduce contamination, pests, and disease pressure.' },
  { icon: 'bi-graph-up-arrow', label: 'Higher Yield Per Area', desc: 'Vertical growing systems maximize production in limited spaces.' },
  { icon: 'bi-sliders', label: 'Precision Crop Control', desc: 'Lighting, nutrients, temperature, and humidity can be optimized for better crop quality.' },
  { icon: 'bi-star-fill', label: 'Premium Market Value', desc: 'Indoor-grown produce is preferred in premium markets due to consistency and cleanliness.' },
];

const crops = [
  {
    title: 'Exotic Greens',
    cropImg: lettuceImg,
    desc: 'Indoor hydroponics is ideal for producing premium leafy greens with excellent texture, color, and consistency.',
    varieties: ['Romaine Lettuce', 'Iceberg Lettuce', 'Butterhead Lettuce', 'Red Coral Lettuce', 'Green Coral Lettuce', 'Lollo Rosso', 'Oakleaf Lettuce', 'Kale', 'Arugula', 'Swiss Chard', 'Pak Choi'],
    benefits: ['Fast-growing crops', 'Premium retail demand', 'Consistent year-round production', 'Ideal for hotels, cafes & supermarkets'],
    icon: 'bi-flower1',
  },
  {
    title: 'Baby Carrot Farming',
    cropImg: babycarrot1,
    desc: 'Baby carrots are a unique, premium-value crop increasingly demanded in fine dining restaurants, salad brands, and premium retail stores.',
    varieties: ['Baby Carrot'],
    benefits: ['Uniform shape & size', 'Cleaner harvests', 'Better color and texture', 'Controlled growth conditions'],
    icon: 'bi-brightness-high',
  },
  {
    title: 'Strawberry Farming',
    cropImg: strawberryImg,
    desc: 'Indoor strawberry farming allows growers to produce high-quality berries with better consistency and reduced environmental stress.',
    varieties: ['Red Strawberry', 'White Strawberry', 'Festival Variety'],
    benefits: ['Premium-quality fruits', 'Better pest management', 'Controlled nutrient supply', 'Attractive commercial value'],
    icon: 'bi-heart-fill',
  },
  {
    title: 'Baby Radish Farming',
    cropImg: babyradish,
    desc: 'Baby radish is a fast-growing specialty crop suitable for controlled indoor farming.',
    varieties: ['Baby Radish', 'French Breakfast Radish', 'Cherry Belle'],
    benefits: ['Quick harvest cycles', 'Crisp texture & vibrant color', 'Ideal for gourmet and salad markets', 'Consistent quality production'],
    icon: 'bi-circle',
  },
  {
    title: 'Microgreens Farming',
    cropImg: microgreensImg,
    desc: 'Microgreens are among the most profitable indoor-grown crops due to their fast harvest cycles, premium pricing, and high nutritional value.',
    varieties: ['Sunflower', 'Broccoli', 'Radish', 'Mustard', 'Pea Shoots', 'Amaranth'],
    benefits: ['Harvest in 7–15 days', 'High market demand', 'Suitable for compact spaces', 'Excellent for premium restaurants & health markets'],
    icon: 'bi-tree',
  },
  {
    title: 'Edible Flowers Farming',
    cropImg: edibleFlowerImg,
    desc: 'Edible flowers are high-value specialty crops used in fine dining, gourmet plating, desserts & beverages, and luxury hospitality.',
    varieties: ['Nasturtium', 'Viola', 'Marigold', 'Pansy', 'Dianthus'],
    benefits: ['Premium market positioning', 'High commercial value', 'Unique specialty crop opportunity', 'Ideal for chefs & gourmet suppliers'],
    icon: 'bi-flower3',
  },
];

const solutions = [
  {
    title: 'Indoor Farm Planning',
    items: ['Space optimization', 'Crop selection guidance', 'Production planning'],
  },
  {
    title: 'Vertical Growing Systems',
    items: ['Multi-layer rack systems', 'LED grow light integration', 'Efficient irrigation systems'],
  },
  {
    title: 'Environmental Control Support',
    items: ['Lighting guidance', 'Air circulation planning', 'Temperature & humidity recommendations'],
  },
  {
    title: 'Nutrient & Crop Management',
    items: ['Nutrient scheduling', 'Crop cycle planning', 'Quality optimization'],
  },
  {
    title: 'Training & Technical Support',
    items: ['Hands-on operational guidance', 'Crop monitoring support', 'Troubleshooting assistance'],
  },
];

const targetAudience = [
  'Entrepreneurs',
  'Urban agriculture businesses',
  'Specialty crop growers',
  'Premium produce suppliers',
  'Restaurants & hospitality chains',
  'Modern farming startups',
];

function IndoorVerticalFarming() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">Smart Indoor Farming</span>
              <h1 className="text-white mb-3">Indoor & Vertical Farming</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/service" className="text-white-50">Services</Link></li>
                  <li className="breadcrumb-item active">Indoor & Vertical Farming</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <img src={img} alt="Indoor Vertical Farming" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />

      {/* Intro */}
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="section-subtitle">Indoor Hydroponic Farming Solutions</span>
            <h2 className="section-title mb-3">Smart Indoor Farming for Premium Crop Production</h2>
            <p className="text-muted" style={{ lineHeight: '1.9' }}>
              At True Leaves System, we design advanced indoor hydroponic farming solutions that enable growers to produce clean, premium-quality crops in fully controlled environments.
              Indoor farming allows crops to be grown independent of climate conditions, seasonal limitations, soil quality, and outdoor pests and contamination.
            </p>
          </div>
        </div>

        {/* Indoor farming delivers */}
        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <div className="p-4 rounded-3 bg-light border-start border-4 border-primary">
              <h5 className="mb-3">Using controlled lighting, nutrient management, and precision farming techniques, indoor hydroponics delivers:</h5>
              <div className="row g-2 mb-4">
                {['Consistent quality', 'Faster crop cycles', 'Higher productivity per sq.ft', 'Clean and premium harvests year-round'].map((item) => (
                  <div className="col-md-6" key={item}>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-primary"></i>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <h5 className="mb-3">Our indoor farming systems are ideal for:</h5>
              <div className="row g-2">
                {['Commercial indoor farms', 'Urban agriculture projects', 'Premium produce cultivation', 'Restaurants & retail supply chains', 'High-value specialty crop production'].map((item) => (
                  <div className="col-md-6" key={item}>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-arrow-right-circle-fill text-primary"></i>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Advantages */}
        <div className="text-center mb-4" data-aos="fade-up">
          <span className="section-subtitle">Why Indoor Hydroponic Farming?</span>
          <h2 className="section-title">Key Advantages</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>
            Indoor farming is one of the fastest-growing sectors in modern agriculture due to its ability to produce high-quality crops with precision and consistency.
          </p>
        </div>
        <div className="row g-4 mb-2">
          {keyAdvantages.map(({ icon, label, desc }, i) => (
            <div className="col-lg-4 col-md-6" key={label} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="about-feature-card p-4 h-100">
                <i className={`bi ${icon} fs-1 text-primary mb-3 d-block`}></i>
                <h5>{label}</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.88rem' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crops Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">What You Can Grow</span>
            <h2 className="section-title">Crops Suitable for Indoor Hydroponic Farming</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>Our indoor hydroponic systems support a wide range of premium and specialty crops.</p>
          </div>
          <div className="row g-4">
            {crops.map(({ title, cropImg, desc, varieties, benefits, icon }, i) => (
              <div className="col-lg-4 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="service-card h-100">
                  {cropImg && (
                    <div className="service-card-img">
                      <img src={cropImg} alt={title} />
                    </div>
                  )}
                  <div className="service-card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="why-feature-icon flex-shrink-0">
                        <i className={`bi ${icon}`}></i>
                      </div>
                      <h5 className="mb-0">{title}</h5>
                    </div>
                    <p className="text-muted mb-3" style={{ fontSize: '0.88rem' }}>{desc}</p>
                    <h6 className="mb-2" style={{ fontSize: '0.85rem' }}>Varieties:</h6>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {varieties.map((v) => (
                        <span key={v} className="badge rounded-pill" style={{ background: 'var(--light)', color: 'var(--dark)', fontSize: '0.75rem', fontWeight: 500 }}>{v}</span>
                      ))}
                    </div>
                    <h6 className="mb-2" style={{ fontSize: '0.85rem' }}>Benefits:</h6>
                    {benefits.map((b) => (
                      <div className="d-flex align-items-center gap-2 mb-1" key={b}>
                        <i className="bi bi-check-circle-fill text-primary" style={{ fontSize: '0.75rem' }}></i>
                        <span style={{ fontSize: '0.82rem' }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Our Indoor Farming Solutions Include</h2>
        </div>
        <div className="row g-4">
          {solutions.map(({ title, items }, i) => (
            <div className="col-lg-4 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="mission-card h-100">
                <div className="mission-icon">
                  <i className="bi bi-check2-all"></i>
                </div>
                <h5>{title}</h5>
                {items.map((item) => (
                  <div className="d-flex align-items-center gap-2 mb-2" key={item}>
                    <i className="bi bi-arrow-right-short text-primary fs-5"></i>
                    <span style={{ fontSize: '0.88rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who Is This For */}
      <div className="container-fluid why-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="section-subtitle">Ideal For</span>
              <h2 className="section-title text-white mb-4">Who Is Indoor Farming Suitable For?</h2>
              <div className="row g-3">
                {targetAudience.map((item) => (
                  <div className="col-md-6" key={item}>
                    <div className="why-feature-card">
                      <div className="why-feature-icon flex-shrink-0">
                        <i className="bi bi-person-check-fill"></i>
                      </div>
                      <span className="text-white">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="why-quote-card p-5">
                <i className="bi bi-quote fs-1 mb-3 d-block" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
                <h4 className="text-white mb-3">The Future of Premium Farming</h4>
                <p className="mb-3">
                  Indoor hydroponic farming enables growers to produce premium crops with precision, consistency, and sustainability.
                  At True Leaves System, we help build indoor farming projects designed for high-quality production, efficient operations, scalable growth, and long-term profitability.
                </p>
                <p className="mb-4 fw-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Smart farming starts with the right system, planning, and support.
                </p>
                <Link to="/contact" className="btn btn-light rounded-pill px-4">
                  <i className="bi bi-calendar-check me-2"></i>Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default IndoorVerticalFarming;
