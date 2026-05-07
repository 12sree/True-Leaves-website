import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/About';
import { Link } from 'react-router-dom';

const visionPoints = [
  { icon: 'bi-leaf', text: 'Fresh, chemical-free food is grown closer to consumers' },
  { icon: 'bi-cloud-sun', text: 'Farming is independent of soil, climate, and seasons' },
  { icon: 'bi-currency-rupee', text: 'Agriculture becomes a reliable and high-income opportunity' },
  { icon: 'bi-building', text: 'Every space — from terraces to warehouses — can produce food efficiently' },
];

const missionPoints = [
  {
    icon: 'bi-graph-up-arrow',
    title: 'Building Profitable Farms',
    desc: 'Designing systems focused on ROI, yield, and long-term sustainability',
  },
  {
    icon: 'bi-lightbulb',
    title: 'Simplifying Hydroponics',
    desc: 'Making advanced farming easy to start, operate, and scale',
  },
  {
    icon: 'bi-headset',
    title: 'Providing Complete Support',
    desc: 'From consultation → setup → training → ongoing guidance',
  },
  {
    icon: 'bi-cpu',
    title: 'Delivering High-Performance Systems',
    desc: 'Engineered for Indian conditions, reliability, and efficiency',
  },
  {
    icon: 'bi-robot',
    title: 'Enabling Smart Agriculture',
    desc: 'Helping people shift from traditional uncertainty to controlled, predictable farming',
  },
];

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">About Us</span>
              <h1 className="text-white mb-3">Who We Are</h1>
              <p className="text-white-50 mb-4">Empowering growers, entrepreneurs, and institutions with end-to-end hydroponic solutions.</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item active">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Vision Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="section-subtitle">Our Vision</span>
              <h2 className="section-title">Transforming the Future of Agriculture</h2>
              <p className="text-muted mb-4">
                To transform the future of agriculture by making hydroponic farming accessible, scalable, and profitable for everyone.
              </p>
              <div className="d-flex flex-column gap-3 mb-4">
                {visionPoints.map(({ icon, text }) => (
                  <div className="vision-point" key={text}>
                    <div className="vision-icon">
                      <i className={`bi ${icon}`}></i>
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <div className="vision-quote">
                <i className="bi bi-quote fs-2 text-secondary"></i>
                <p className="mb-0 fw-semibold fst-italic">
                  "Turn farming into a predictable, technology-driven income model."
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="vision-card-wrap">
                <div className="vision-big-card">
                  <i className="bi bi-eye-fill"></i>
                  <h3>Our Goal</h3>
                  <p>We envision a world where every individual and institution can harness the power of hydroponics to grow fresh, healthy food — regardless of location, season, or soil.</p>
                  <div className="row g-3 mt-2">
                    {[
                      { value: '5000+', label: 'Growers Empowered' },
                      { value: '15+', label: 'Years Experience' },
                      { value: '98%', label: 'Success Rate' },
                      { value: '24/7', label: 'Support' },
                    ].map(({ value, label }) => (
                      <div className="col-6" key={label}>
                        <div className="vision-stat">
                          <h4>{value}</h4>
                          <span>{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Our Mission</span>
            <h2 className="section-title">What We Are Committed To</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              To empower growers, entrepreneurs, and institutions with end-to-end hydroponic solutions that deliver real results.
            </p>
          </div>
          <div className="row g-4 mb-5">
            {missionPoints.map(({ icon, title, desc }, i) => (
              <div className="col-lg-4 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="mission-card">
                  <div className="mission-icon">
                    <i className={`bi ${icon}`}></i>
                  </div>
                  <h5>{title}</h5>
                  <p className="text-muted mb-0">{desc}</p>
                </div>
              </div>
            ))}
            {/* Mission Quote Card */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
              <div className="mission-quote-card">
                <i className="bi bi-quote fs-1 mb-3"></i>
                <p className="mb-0">
                  "We don't just sell hydroponic systems — we build successful growers."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
