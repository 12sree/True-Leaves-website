import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function ServiceLayout({ title, subtitle, img, desc, features, benefits, children }) {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">{subtitle}</span>
              <h1 className="text-white mb-3">{title}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/service" className="text-white-50">Services</Link></li>
                  <li className="breadcrumb-item active">{title}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid px-0">

        {/* Full Width Image */}
        <div data-aos="fade-down">
          <img src={img} alt={title} style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Info & Features */}
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="section-subtitle">{subtitle}</span>
              <h2 className="section-title mb-3">{title}</h2>
              <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>{desc}</p>
              <h5 className="mb-3">What's Included</h5>
              <div className="row g-2 mb-4">
                {features.map((f) => (
                  <div className="col-md-6" key={f}>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-primary"></i>
                      <span style={{ fontSize: '0.9rem' }}>{f}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary rounded-pill px-4 me-2">
                <i className="bi bi-calendar-check me-2"></i>Book a Consultation
              </Link>
              <Link to="/service" className="btn btn-outline-secondary rounded-pill px-4">
                <i className="bi bi-arrow-left me-2"></i>All Services
              </Link>
            </div>
          </div>

          {/* Benefits */}
          <div className="row g-4 mt-4">
            {benefits.map(({ icon, label, desc: bdesc }) => (
              <div className="col-md-4" key={label} data-aos="fade-up">
                <div className="about-feature-card text-center p-4">
                  <i className={`bi ${icon} fs-1 text-primary mb-3 d-block`}></i>
                  <h5>{label}</h5>
                  <p className="text-muted mb-0" style={{ fontSize: '0.88rem' }}>{bdesc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra content per service */}
          {children}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ServiceLayout;
