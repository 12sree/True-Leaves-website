import { Link } from 'react-router-dom';

import service1 from '../common/img/service-1.jpeg';
import service2 from '../common/img/serivice-2.jpeg';
import service3 from '../common/img/service-3.jpeg';
import service4 from '../common/img/service-4.jpeg';
import service5 from '../common/img/service-5.jpeg';
import service6 from '../common/img/service-6.jpeg';

const services = [
  {
    img: service1,
    title: 'Commercial Farming',
    desc: 'This remains a standalone category for large-scale, profit-oriented operations. It covers end-to-end setup for industrial yield, including feasibility studies and site planning.',
  },
  {
    img: service2,
    title: 'Indoor & Vertical Farming',
    desc: 'Maximize limited space with stacked growing systems and specialized lighting, allowing you to grow fresh produce anywhere, regardless of the climate.',
  },
  {
    img: service3,
    title: 'Home & Terrace Gardening',
    desc: 'Transform your balconies and rooftops into lush, productive green zones with lightweight systems optimized for urban residential spaces.',
  },
  {
    img: service4,
    title: 'Polyhouse & Greenhouse Systems',
    desc: 'Climate-resilient structures that protect your crops from external elements while optimizing sunlight and temperature for year-round harvesting.',
  },
  {
    img: service5,
    title: 'Hydroponic Home Kits',
    desc: 'User-friendly, "plug-and-play" starter sets that include everything a beginner needs to harvest their first pesticide-free greens at home.',
  },
  {
    img: service6,
    title: 'Automation & Smart Solutions',
    desc: 'Take the guesswork out of farming with AI-driven nutrient dosers, remote monitoring sensors, and smart controllers for a hands-off growing experience.',
  },
];

const whyUs = [
  { icon: 'bi-check-circle-fill', title: 'End-to-end hydroponic solutions', desc: 'Complete support from system design and installation to training and ongoing guidance.' },
  { icon: 'bi-check-circle-fill', title: 'Expert guidance & training', desc: 'Hands-on training programs and expert consultation for beginners and commercial growers.' },
  { icon: 'bi-check-circle-fill', title: 'Designed for Indian conditions', desc: 'Systems engineered specifically for Indian climate, reliability, and efficiency.' },
  { icon: 'bi-check-circle-fill', title: 'Focus on profitability', desc: 'Every system is designed with ROI, yield, and long-term sustainability in mind.' },
  { icon: 'bi-check-circle-fill', title: 'Scalable systems for all levels', desc: 'Whether you are a home grower or a commercial farmer, we have the right solution.' },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'We understand your goals, space and budget to recommend the best solution.' },
  { num: '02', title: 'Design & Plan', desc: 'Our experts design a custom hydroponic system tailored to your needs.' },
  { num: '03', title: 'Installation', desc: 'Professional installation and setup of your complete hydroponic farm.' },
  { num: '04', title: 'Grow & Earn', desc: 'Start growing and earning with full support from our team.' },
];

function Services() {
  return (
    <>
      {/* Services Grid */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Hydroponic Services</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '550px' }}>
              From commercial farm setups to home grow kits, we provide complete hydroponic solutions for every grower.
            </p>
          </div>
          <div className="row g-4">
            {services.map(({ img, title, desc }, i) => (
              <div className="col-lg-4 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="service-card h-100">
                  <div className="service-card-img">
                    <img src={img} alt={title} />
                  </div>
                  <div className="service-card-body">
                    <h4 className="service-card-title">{title}</h4>
                    <p className="service-card-desc">{desc}</p>
                    <Link to="/contact" className="service-card-link">
                      Learn More <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-fluid why-section py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Why Choose True Leaves System</span>
            <h2 className="section-title text-white">Why Growers Trust Us</h2>
            <p className="text-white-50 mx-auto" style={{ maxWidth: '550px' }}>
              We combine cutting-edge hydroponic technology with hands-on expertise to deliver solutions that truly work for you.
            </p>
          </div>
          <div className="row g-4 mb-5">
            {whyUs.map(({ icon, title, desc }, i) => (
              <div className="col-lg-4 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="why-feature-card">
                  <div className="why-feature-icon">
                    <i className={`bi ${icon}`}></i>
                  </div>
                  <div>
                    <h6 className="text-white mb-1">{title}</h6>
                    <p className="mb-0 small" style={{ color: 'rgba(255,255,255,0.65)' }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Quote Card */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={whyUs.length * 80}>
              <div className="why-quote-card">
                <i className="bi bi-quote fs-1 mb-3 d-block" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
                <p className="fst-italic fw-semibold mb-0">
                  "We don't just build systems — we build successful growers."
                </p>
              </div>
            </div>
          </div>
          {/* Stats Row */}
          <div className="row g-3" data-aos="fade-up">
            {[
              { value: '5000+', label: 'Happy Growers', icon: 'bi-people-fill' },
              { value: '15+', label: 'Years Experience', icon: 'bi-award-fill' },
              { value: '98%', label: 'Success Rate', icon: 'bi-graph-up-arrow' },
              { value: '24/7', label: 'Support Available', icon: 'bi-headset' },
            ].map(({ value, label, icon }) => (
              <div className="col-6 col-md-3" key={label}>
                <div className="why-stat-card">
                  <i className={`bi ${icon}`}></i>
                  <h3>{value}</h3>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">The Process</span>
            <h2 className="section-title">How It Works</h2>
          </div>
          <div className="row g-4">
            {steps.map(({ num, title, desc }, i) => (
              <div className="col-lg-3 col-md-6" key={num} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="step-card">
                  <div className="step-num">{num}</div>
                  <h5>{title}</h5>
                  <p className="text-muted mb-0">{desc}</p>
                </div>
                {i < steps.length - 1 && <div className="step-arrow d-none d-lg-block"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="container-fluid service-cta py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center g-4">
            <div className="col-lg-8">
              <span className="section-subtitle">Call To Action</span>
              <h2 className="text-white mb-3">Start Your Hydroponic Journey Today</h2>
              <p className="text-white-50 mb-4">Whether you want to grow your own food or build a profitable farming business, True Leaves System is here to guide you.</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/contact" className="btn btn-secondary btn-lg rounded-pill px-5">
                  <i className="bi bi-calendar-check me-2"></i>Book a Consultation
                </Link>
                <Link to="/product" className="btn btn-outline-light btn-lg rounded-pill px-5">
                  <i className="bi bi-arrow-right-circle me-2"></i>Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
