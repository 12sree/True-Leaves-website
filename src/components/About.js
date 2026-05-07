import { Link } from 'react-router-dom';
import about from '../common/img/about.png';

const features = [
  {
    icon: 'bi-droplet-half',
    title: '90% Less Water',
    desc: 'Hydroponic systems use up to 90% less water than traditional soil farming through recirculation.',
  },
  {
    icon: 'bi-speedometer2',
    title: '3x Faster Growth',
    desc: 'Plants grow 30–50% faster in hydroponic systems due to direct nutrient delivery to roots.',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Year-Round Harvest',
    desc: 'Grow any crop in any season, independent of weather, climate, or soil conditions.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Zero Pesticides',
    desc: 'Controlled environment eliminates the need for harmful pesticides and chemicals.',
  },
];

function AboutSection() {
  return (
    <div className="container-fluid about py-5">
      <div className="container">
        <div className="row gx-5 align-items-center">

          {/* Image */}
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <div className="about-img-wrapper">
              <img className="img-fluid mx-auto d-block" src={about} alt="About TrueLeaves" />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-6" data-aos="fade-left">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">India's Leading Hydroponic Solutions Provider</h2>
            <p className="text-muted mb-2">
              <strong>True Leaves System</strong> is a dedicated hydroponic solutions company helping commercial farmers, urban growers, and entrepreneurs build profitable, sustainable farms.
            </p>
            <p className="text-muted mb-4">
              We provide end-to-end support — from system design and installation to training and ongoing guidance — so you can grow more, use less, and earn better.
            </p>

            {/* Feature Cards */}
            <div className="row g-3 mb-4">
              {features.map(({ icon, title, desc }) => (
                <div className="col-sm-6" key={title}>
                  <div className="about-feature-card">
                    <i className={`bi ${icon} fs-2 mb-2 d-block`}></i>
                    <h6 className="fw-bold mb-1">{title}</h6>
                    <p className="mb-0 text-muted small">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex gap-3 flex-wrap">
              <Link to="/service" className="btn btn-primary rounded-pill px-4">
                <i className="bi bi-grid me-2"></i>Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline-secondary rounded-pill px-4">
                <i className="bi bi-telephone me-2"></i>Talk to an Expert
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutSection;
