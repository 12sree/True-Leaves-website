import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import img from '../../common/img/service-4.jpeg';
import capsicumImg from '../../common/img/capsicum.jpg';
import cherryTomatoImg from '../../common/img/cherry-tomato.jpg';
import strawberryImg from '../../common/img/strawberry.jpeg';
import lettuceImg from '../../common/img/lettuce.jpg';

const keyBenefits = [
  { icon: 'bi-cloud-sun', label: 'Weather Protection', desc: 'Shield crops from rain, wind, extreme heat, and cold throughout the year.' },
  { icon: 'bi-thermometer-half', label: 'Temperature Control', desc: 'Maintain optimal growing temperatures for consistent crop performance.' },
  { icon: 'bi-bar-chart-line', label: 'Consistent Output', desc: 'Predictable harvests with reduced crop loss and waste.' },
  { icon: 'bi-droplet-half', label: 'Water Efficiency', desc: 'Integrated irrigation systems reduce water usage significantly.' },
  { icon: 'bi-shield-check', label: 'Pest & Disease Control', desc: 'Enclosed structures reduce exposure to pests and soil-borne diseases.' },
  { icon: 'bi-calendar-check', label: 'Year-Round Production', desc: 'Grow crops continuously regardless of external climate conditions.' },
];

const structureTypes = [
  {
    title: 'Polyhouse Farming',
    icon: 'bi-house-door',
    desc: 'UV-stabilized polyfilm structures designed for Indian climate conditions. Cost-effective and highly efficient for commercial crop production.',
    features: ['UV-stabilized polyfilm covering', 'Natural ventilation design', 'Suitable for most vegetables & fruits', 'Cost-effective construction'],
  },
  {
    title: 'Greenhouse Systems',
    icon: 'bi-building',
    desc: 'Semi-permanent or permanent glass/polycarbonate structures offering superior climate control for premium crop cultivation.',
    features: ['Glass or polycarbonate panels', 'Advanced climate control', 'Ideal for exotic & specialty crops', 'Long-term durability'],
  },
  {
    title: 'Shade Net Farming',
    icon: 'bi-grid',
    desc: 'Shade net structures provide partial protection from direct sunlight and harsh weather, ideal for leafy greens and herbs.',
    features: ['Various shade percentages available', 'Low-cost setup', 'Ideal for leafy greens & herbs', 'Good air circulation'],
  },
  {
    title: 'Net House Systems',
    icon: 'bi-layers',
    desc: 'Insect-proof net houses protect crops from pests while maintaining airflow, reducing the need for chemical pesticides.',
    features: ['Insect-proof netting', 'Reduced pesticide use', 'Good for organic farming', 'Suitable for all seasons'],
  },
];

const crops = [
  { title: 'Colored Capsicum', cropImg: capsicumImg, icon: 'bi-brightness-high', items: ['Red Capsicum', 'Yellow Capsicum', 'Orange Capsicum', 'Green Capsicum'] },
  { title: 'Cherry Tomato', cropImg: cherryTomatoImg, icon: 'bi-circle-fill', items: ['Red Cherry Tomato', 'Yellow Cherry Tomato', 'Cocktail Tomato'] },
  { title: 'Exotic Leafy Greens', cropImg: lettuceImg, icon: 'bi-flower1', items: ['Romaine Lettuce', 'Butterhead Lettuce', 'Kale', 'Arugula', 'Swiss Chard'] },
  { title: 'Strawberry', cropImg: strawberryImg, icon: 'bi-heart-fill', items: ['Red Strawberry', 'White Strawberry', 'Festival Variety'] },
];

const solutions = [
  { title: 'Structure Design & Planning', items: ['Site assessment', 'Structure type selection', 'Space optimization planning'] },
  { title: 'Construction & Installation', items: ['Foundation work', 'Frame & covering installation', 'Ventilation system setup'] },
  { title: 'Irrigation & Fertigation', items: ['Drip irrigation systems', 'Fogger systems', 'Nutrient dosing setup'] },
  { title: 'Climate Control Systems', items: ['Cooling pad & fan systems', 'Shade net integration', 'Thermal screen options'] },
  { title: 'Training & Support', items: ['Crop management guidance', 'Operational training', 'Ongoing technical support'] },
];

const targetAudience = [
  'Commercial farmers', 'Greenhouse investors', 'Agribusiness entrepreneurs',
  'Progressive farmers', 'Export-oriented growers', 'Landowners seeking high-value farming',
];

function PolyhouseGreenhouse() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">Climate-Resilient Crop Protection</span>
              <h1 className="text-white mb-3">Polyhouse & Greenhouse Systems</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/service" className="text-white-50">Services</Link></li>
                  <li className="breadcrumb-item active">Polyhouse & Greenhouse</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <img src={img} alt="Polyhouse & Greenhouse" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />

      {/* Intro */}
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="section-subtitle">Polyhouse & Greenhouse Farming</span>
            <h2 className="section-title mb-3">Grow More. Protect Better. Earn Consistently.</h2>
            <p className="text-muted" style={{ lineHeight: '1.9' }}>
              At True Leaves System, we design and install polyhouse and greenhouse structures that protect your crops from unpredictable weather while creating the ideal growing environment for premium-quality produce.
              Our structures are engineered for Indian climate conditions, combining durability, efficiency, and crop performance.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="text-center mb-4" data-aos="fade-up">
          <span className="section-subtitle">Why Choose Protected Cultivation?</span>
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

      {/* Structure Types */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Our Structures</span>
            <h2 className="section-title">Types of Protected Cultivation Structures</h2>
          </div>
          <div className="row g-4">
            {structureTypes.map(({ title, icon, desc, features }, i) => (
              <div className="col-lg-3 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="mission-card h-100">
                  <div className="mission-icon"><i className={`bi ${icon}`}></i></div>
                  <h5>{title}</h5>
                  <p className="text-muted mb-3" style={{ fontSize: '0.88rem' }}>{desc}</p>
                  {features.map((f) => (
                    <div className="d-flex align-items-center gap-2 mb-1" key={f}>
                      <i className="bi bi-check-circle-fill text-primary" style={{ fontSize: '0.75rem' }}></i>
                      <span style={{ fontSize: '0.82rem' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Crops */}
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-subtitle">What You Can Grow</span>
          <h2 className="section-title">Crops Suitable for Polyhouse & Greenhouse Farming</h2>
        </div>
        <div className="row g-4">
          {crops.map(({ title, cropImg, icon, items }, i) => (
            <div className="col-lg-3 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
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
                      <span style={{ fontSize: '0.88rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Polyhouse & Greenhouse Solutions Include</h2>
          </div>
          <div className="row g-4">
            {solutions.map(({ title, items }, i) => (
              <div className="col-lg-4 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="mission-card h-100">
                  <div className="mission-icon"><i className="bi bi-check2-all"></i></div>
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
                <h4 className="text-white mb-3">Protected Farming for Consistent Profits</h4>
                <p className="mb-4">
                  Polyhouse and greenhouse farming gives you control over your growing environment — reducing risk, improving quality, and enabling year-round production.
                  At True Leaves System, we build structures designed for long-term performance and profitability.
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

export default PolyhouseGreenhouse;
