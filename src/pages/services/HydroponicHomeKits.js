import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import img from '../../common/img/service-5.jpeg';
import lettuceImg from '../../common/img/lettuce.jpg';
import microgreensImg from '../../common/img/microgreens.jpg';
import strawberryImg from '../../common/img/strawberry-2.jpeg';
import cherryTomatoImg from '../../common/img/cherry-tomato.jpg';

const keyBenefits = [
  { icon: 'bi-box-seam', label: 'All-in-One Kit', desc: 'Everything you need arrives ready to use — no extra purchases required.' },
  { icon: 'bi-clock', label: 'Quick Setup', desc: 'Get your system running in under an hour with our step-by-step guide.' },
  { icon: 'bi-patch-check', label: 'Proven Results', desc: 'Thousands of happy home growers across India trust our kits.' },
  { icon: 'bi-droplet-half', label: 'Water Saving', desc: 'Uses up to 90% less water compared to traditional soil gardening.' },
  { icon: 'bi-shield-check', label: 'Chemical-Free', desc: 'Grow pesticide-free, clean produce for your family.' },
  { icon: 'bi-currency-rupee', label: 'Save on Groceries', desc: 'Reduce monthly vegetable expenses with your own fresh harvest.' },
];

const kitTypes = [
  {
    title: 'Starter Kit',
    icon: 'bi-1-circle',
    desc: 'Perfect for first-time growers wanting to experience hydroponics at home.',
    includes: ['Small NFT or DWC system', 'Starter nutrient pack', 'Net pots & growing media', 'Setup guide & support'],
    ideal: 'Beginners & curious home growers',
  },
  {
    title: 'Family Kit',
    icon: 'bi-people-fill',
    desc: 'A mid-sized system designed to supply fresh greens for a family of 4–6 regularly.',
    includes: ['Medium NFT channel system', 'Monthly nutrient supply', 'Seed starter pack', 'Online training access'],
    ideal: 'Families wanting regular fresh produce',
  },
  {
    title: 'Terrace Kit',
    icon: 'bi-house-heart',
    desc: 'Designed for balconies and terraces, this kit maximizes your outdoor growing space.',
    includes: ['Modular grow channels', 'Weather-resistant components', 'Drip irrigation setup', 'Crop planning guide'],
    ideal: 'Urban homes with terrace or balcony space',
  },
  {
    title: 'Income Kit',
    icon: 'bi-graph-up-arrow',
    desc: 'A larger setup for home growers looking to sell fresh produce locally.',
    includes: ['High-capacity grow system', 'Commercial nutrient packs', 'Crop yield planning', 'Market guidance support'],
    ideal: 'Home growers seeking supplementary income',
  },
];

const crops = [
  { title: 'Leafy Greens', cropImg: lettuceImg, icon: 'bi-flower1', items: ['Lettuce', 'Spinach', 'Kale', 'Pak Choi', 'Swiss Chard'] },
  { title: 'Microgreens', cropImg: microgreensImg, icon: 'bi-tree', items: ['Sunflower', 'Broccoli', 'Radish', 'Mustard', 'Pea Shoots'] },
  { title: 'Fruiting Crops', cropImg: cherryTomatoImg, icon: 'bi-heart-fill', items: ['Cherry Tomato', 'Chilli', 'Cucumber', 'Capsicum'] },
  { title: 'Strawberry', cropImg: strawberryImg, icon: 'bi-star-fill', items: ['Red Strawberry', 'White Strawberry', 'Festival Variety'] },
];

const whatsIncluded = [
  'Grow channels / containers',
  'Water pump & timer',
  'Net pots & growing media',
  'Starter nutrient solution',
  'pH testing kit',
  'Seed starter pack',
  'Setup & care guide',
  'Online support access',
];

const targetAudience = [
  'First-time home growers', 'Urban families', 'Health-conscious individuals',
  'Gardening enthusiasts', 'Students & educators', 'Home-based income seekers',
];

function HydroponicHomeKits() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">Plug-and-Play Starter Sets</span>
              <h1 className="text-white mb-3">Hydroponic Home Kits</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/service" className="text-white-50">Services</Link></li>
                  <li className="breadcrumb-item active">Hydroponic Home Kits</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <img src={img} alt="Hydroponic Home Kits" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />

      {/* Intro */}
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="section-subtitle">Hydroponic Home Kits</span>
            <h2 className="section-title mb-3">Start Growing Fresh Food at Home — Today</h2>
            <p className="text-muted" style={{ lineHeight: '1.9' }}>
              Our hydroponic home kits are the easiest way to start growing your own fresh, pesticide-free food at home.
              Everything you need is included — just set it up, add water and nutrients, and watch your plants thrive.
              Perfect for first-time growers, urban families, and anyone who wants clean, healthy food grown right at home.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="text-center mb-4" data-aos="fade-up">
          <span className="section-subtitle">Why Choose Our Kits?</span>
          <h2 className="section-title">Key Benefits</h2>
        </div>
        <div className="row g-4 mb-5">
          {keyBenefits.map(({ icon, label, desc }, i) => (
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

      {/* Kit Types */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Find Your Kit</span>
            <h2 className="section-title">Kit Types Available</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>We offer kits for every need — from beginners to income-focused home growers.</p>
          </div>
          <div className="row g-4">
            {kitTypes.map(({ title, icon, desc, includes, ideal }, i) => (
              <div className="col-lg-3 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="mission-card h-100">
                  <div className="mission-icon"><i className={`bi ${icon}`}></i></div>
                  <h5>{title}</h5>
                  <p className="text-muted mb-3" style={{ fontSize: '0.88rem' }}>{desc}</p>
                  <h6 className="mb-2" style={{ fontSize: '0.82rem' }}>Includes:</h6>
                  {includes.map((item) => (
                    <div className="d-flex align-items-center gap-2 mb-1" key={item}>
                      <i className="bi bi-check-circle-fill text-primary" style={{ fontSize: '0.75rem' }}></i>
                      <span style={{ fontSize: '0.82rem' }}>{item}</span>
                    </div>
                  ))}
                  <div className="mt-3 p-2 rounded-2" style={{ background: 'var(--light)' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 600 }}>Ideal for: {ideal}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Included + Crops */}
      <div className="container py-5">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5" data-aos="fade-right">
            <span className="section-subtitle">Inside Every Kit</span>
            <h3 className="section-title mb-4">What's Included in Every Kit</h3>
            <div className="row g-2">
              {whatsIncluded.map((item) => (
                <div className="col-md-6" key={item}>
                  <div className="d-flex align-items-center gap-2 p-2 rounded-2 bg-light">
                    <i className="bi bi-check-circle-fill text-primary"></i>
                    <span style={{ fontSize: '0.88rem' }}>{item}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-3 border-start border-4 border-primary bg-light">
              <p className="mb-0 fw-semibold" style={{ color: 'var(--primary)' }}>No prior farming experience required. Our kits are designed so anyone can start growing successfully from day one.</p>
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <span className="section-subtitle">What You Can Grow</span>
            <h3 className="section-title mb-4">Crops You Can Grow with Our Kits</h3>
            <div className="row g-4">
              {crops.map(({ title, cropImg, icon, items }, i) => (
                <div className="col-md-6" key={title}>
                  <div className="service-card h-100">
                    {cropImg && <div className="service-card-img"><img src={cropImg} alt={title} /></div>}
                    <div className="service-card-body">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="why-feature-icon flex-shrink-0"><i className={`bi ${icon}`}></i></div>
                        <h5 className="mb-0">{title}</h5>
                      </div>
                      {items.map((item) => (
                        <div className="d-flex align-items-center gap-2 mb-1" key={item}>
                          <i className="bi bi-check-circle-fill text-primary" style={{ fontSize: '0.75rem' }}></i>
                          <span style={{ fontSize: '0.82rem' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Who Is This For + CTA */}
      <div className="container-fluid why-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="section-subtitle">Ideal For</span>
              <h2 className="section-title text-white mb-4">Who Is This For?</h2>
              <div className="row g-3">
                {targetAudience.map((item) => (
                  <div className="col-md-6" key={item}>
                    <div className="why-feature-card">
                      <div className="why-feature-icon flex-shrink-0"><i className="bi bi-person-check-fill"></i></div>
                      <span className="text-white">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="why-quote-card p-5">
                <i className="bi bi-quote fs-1 mb-3 d-block" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
                <h4 className="text-white mb-3">Fresh Food, Right at Home</h4>
                <p className="mb-4">
                  Our hydroponic home kits make it simple for anyone to grow fresh, healthy food at home — no farming experience, no large space, and no complicated setup required.
                  Start small, grow confidently, and enjoy the satisfaction of harvesting your own food.
                </p>
                <Link to="/contact" className="btn btn-light rounded-pill px-4">
                  <i className="bi bi-cart me-2"></i>Order Your Kit Today
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

export default HydroponicHomeKits;
