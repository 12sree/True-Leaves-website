import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import commercialImg from '../../common/img/commercial-1.jpeg';
import cherryTomatoImg from '../../common/img/cherry-tomato.jpg';
import capsicumImg from '../../common/img/capsicum.jpg';
import strawberryImg from '../../common/img/strawberry.jpeg';
import lettuceImg from '../../common/img/lettuce.jpg';
import cucumberImg from '../../common/img/cucumber-2.jpeg';
import broccoliImg from '../../common/img/commercial.jpg';

const keyBenefits = [
  { icon: 'bi-droplet-half', label: 'Up to 90% Water Saving' },
  { icon: 'bi-graph-up-arrow', label: 'Higher Yield Per Sq.ft' },
  { icon: 'bi-star-fill', label: 'Premium Crop Quality' },
  { icon: 'bi-lightning-charge', label: 'Scalable for Any Size Farm' },
  { icon: 'bi-shield-check', label: 'Reduced Soil-Related Problems' },
  { icon: 'bi-calendar-check', label: 'Consistent Year-Round Production' },
];

const crops = [
  {
    title: 'Exotic Leafy Greens',
    cropImg: lettuceImg,
    desc: 'Premium leafy greens are among the most profitable hydroponic crops due to high demand from hotels, restaurants, cafes, supermarkets, and health-conscious consumers.',
    varieties: ['Romaine Lettuce', 'Iceberg Lettuce', 'Butterhead Lettuce', 'Green Coral Lettuce', 'Red Coral Lettuce', 'Oakleaf Lettuce', 'Lollo Rosso', 'Arugula (Rocket Leaf)', 'Kale', 'Swiss Chard', 'Pak Choi', 'Baby Spinach'],
    benefits: ['Fast crop cycles', 'High market demand', 'Premium pricing', 'Ideal for continuous harvesting'],
    icon: 'bi-flower1',
  },
  {
    title: 'Colored Capsicum Farming',
    cropImg: capsicumImg,
    desc: 'Colored capsicum is one of the most profitable greenhouse crops due to strong demand in supermarkets, premium vegetable stores, hotels & restaurants.',
    varieties: ['Red Capsicum', 'Yellow Capsicum', 'Orange Capsicum', 'Green Capsicum'],
    benefits: ['Premium market value', 'High productivity', 'Better fruit quality & uniformity', 'Controlled nutrient management'],
    icon: 'bi-brightness-high',
  },
  {
    title: 'Cherry Tomato Farming',
    cropImg: cherryTomatoImg,
    desc: 'Cherry tomatoes are widely used in salads, hotels, fine dining, and premium retail markets.',
    varieties: ['Red Cherry Tomato', 'Yellow Cherry Tomato', 'Cocktail Tomato'],
    benefits: ['High-value crop', 'Attractive market demand', 'Better fruit consistency'],
    icon: 'bi-circle-fill',
  },
  {
    title: 'Hydroponic Cucumber Farming',
    cropImg: cucumberImg,
    desc: 'Hydroponic cucumbers deliver faster growth, better fruit uniformity, and higher production rates.',
    varieties: ['Greenhouse Cucumber', 'Mini Cucumber', 'English Cucumber'],
    benefits: ['Continuous harvesting', 'Strong market demand', 'Excellent yield potential', 'Suitable for greenhouse farming'],
    icon: 'bi-bar-chart-line',
  },
  {
    title: 'Strawberry Farming',
    cropImg: strawberryImg,
    desc: 'Hydroponic strawberries are gaining popularity due to premium pricing, better fruit cleanliness, and controlled production quality.',
    varieties: ['Red Strawberry', 'White Strawberry', 'Festival Variety'],
    benefits: ['Attractive high-value crop', 'Better fruit quality', 'Reduced soil diseases', 'Premium retail demand'],
    icon: 'bi-heart-fill',
  },
  {
    title: 'Broccoli & Specialty Crops',
    cropImg: broccoliImg,
    desc: 'Hydroponics also supports specialty and premium crops highly demanded in premium restaurants, organic stores, export markets, and health food sectors.',
    varieties: ['Broccoli', 'Celery', 'Basil', 'Mint', 'Coriander', 'Parsley', 'Microgreens', 'Edible Flowers'],
    benefits: ['Export market potential', 'Premium restaurant demand', 'High value per kg', 'Fast turnaround cycles'],
    icon: 'bi-tree',
  },
];

const solutions = [
  {
    title: 'Farm Planning & Consultation',
    items: ['Crop selection guidance', 'Business feasibility analysis', 'Space utilization planning'],
  },
  {
    title: 'System Design & Installation',
    items: ['NFT systems', 'Dutch bucket systems', 'Drip hydroponic systems', 'Nursery systems'],
  },
  {
    title: 'Water & Nutrient Management',
    items: ['Fertigation planning', 'Nutrient dosing guidance', 'Water quality support'],
  },
  {
    title: 'Training & Technical Support',
    items: ['Crop management training', 'Harvest planning', 'Disease & deficiency guidance'],
  },
  {
    title: 'Farm Scaling Support',
    items: ['Expansion planning', 'Production optimization', 'Commercial growth strategies'],
  },
];

const targetAudience = [
  'Progressive farmers',
  'Agribusiness startups',
  'Greenhouse investors',
  'Commercial growers',
  'Landowners exploring high-value farming',
  'Entrepreneurs entering agriculture',
];

function CommercialFarming() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">Large-Scale Hydroponic Operations</span>
              <h1 className="text-white mb-3">Commercial Farming</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/service" className="text-white-50">Services</Link></li>
                  <li className="breadcrumb-item active">Commercial Farming</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <img src={commercialImg} alt="Commercial Farming" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />

      {/* Intro */}
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="section-subtitle">Why Commercial Hydroponics</span>
            <h2 className="section-title mb-3">Build a Modern, Profitable Farming Business with Hydroponics</h2>
            <p className="text-muted" style={{ lineHeight: '1.9' }}>
              At True Leaves System, we help entrepreneurs, farmers, and agribusiness investors build high-performance commercial hydroponic farms designed for productivity, quality, and long-term profitability.
              Hydroponic farming is transforming modern agriculture by enabling growers to produce premium-quality crops with better control, higher efficiency, and reduced water usage compared to traditional farming methods.
            </p>
          </div>
        </div>

        {/* Designed For */}
        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <div className="p-4 rounded-3 bg-light border-start border-4 border-primary">
              <h5 className="mb-3">Our commercial systems are designed specifically for:</h5>
              <div className="row g-2">
                {['Greenhouse farming', 'Polyhouse cultivation', 'Shade-net farming', 'Semi-controlled growing environments'].map((item) => (
                  <div className="col-md-6" key={item}>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-primary"></i>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-3 bg-white">
                <p className="mb-1 fw-semibold">We provide complete support from:</p>
                <p className="mb-0 text-primary fw-bold">Planning → Design → Installation → Training → Production Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose */}
        <div className="row g-4 mb-5 align-items-center">
          <div className="col-lg-5" data-aos="fade-right">
            <span className="section-subtitle">The Problem</span>
            <h3 className="mb-3">Why Choose Commercial Hydroponics?</h3>
            <p className="text-muted mb-3">Traditional farming often faces challenges such as:</p>
            {['Unpredictable climate', 'Soil-borne diseases', 'High water consumption', 'Inconsistent yield quality', 'Seasonal limitations'].map((item) => (
              <div className="d-flex align-items-center gap-2 mb-2" key={item}>
                <i className="bi bi-x-circle-fill text-danger"></i>
                <span>{item}</span>
              </div>
            ))}
            <p className="mt-3 text-muted">Hydroponic farming solves these challenges through controlled nutrient delivery and precision growing methods.</p>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <span className="section-subtitle">The Solution</span>
            <h3 className="mb-3">Key Benefits</h3>
            <div className="row g-3">
              {keyBenefits.map(({ icon, label }) => (
                <div className="col-md-6" key={label}>
                  <div className="d-flex align-items-center gap-3 p-3 rounded-3 bg-light">
                    <div className="why-feature-icon flex-shrink-0">
                      <i className={`bi ${icon}`}></i>
                    </div>
                    <span className="fw-semibold">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crops Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">What You Can Grow</span>
            <h2 className="section-title">Crops Suitable for Commercial Hydroponic Farming</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>Our systems support a wide range of high-value commercial crops.</p>
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
          <h2 className="section-title">Our Commercial Farming Solutions Include</h2>
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
              <h2 className="section-title text-white mb-4">Who Is This For?</h2>
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
                <h4 className="text-white mb-3">Future-Ready Farming Starts Here</h4>
                <p className="mb-4">
                  Commercial hydroponics is not just an alternative farming method — it is a smarter way to produce premium crops with higher efficiency and better profitability.
                  At True Leaves System, we help you build a farm designed not only for growing crops — but for building a sustainable agricultural business.
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

export default CommercialFarming;
