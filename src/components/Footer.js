import { Link } from 'react-router-dom';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/service', label: 'Our Services' },
  { path: '/product', label: 'Our Products' },
  { path: '/blog', label: 'Latest Blog' },
  { path: '/contact', label: 'Contact Us' },
];

function Footer() {
  return (
    <>
      <div className="footer-main pt-5">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row g-5 py-4">

            {/* Brand */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="footer-brand mb-4">
                <h2 className="fw-bold"><span className="text-secondary">True</span>Leaves <span className="fs-6 fw-normal text-white-50">System</span></h2>
                <p>We are dedicated to providing advanced hydroponic solutions for commercial farms, urban homes & smart growers. Grow More. Use Less. Earn Better.</p>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>EWS-B 951-13, Water tank street, Periyathottam colony, Veerkalam, Coimbatore-641007</span>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-envelope-fill"></i>
                <span>reachtrueleaves@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-telephone-fill"></i>
                <span>+91 88703098900</span>
              </div>
              <div className="footer-social mt-3">
                <button className="footer-social-btn" aria-label="Twitter"><i className="fab fa-twitter"></i></button>
                <button className="footer-social-btn" aria-label="Facebook"><i className="fab fa-facebook-f"></i></button>
                <a href="https://www.linkedin.com/company/112359065/admin/page-posts/published/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/trueleavessystem/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="footer-links">
                <h5>Quick Links</h5>
                {quickLinks.map(({ path, label }) => (
                  <Link key={path} to={path}>
                    <i className="bi bi-chevron-right me-1" style={{ fontSize: '11px' }}></i>{label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Links */}
            <div className="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="footer-links">
                <h5>Our Products</h5>
                {['Fresh Vegetables', 'Organic Fruits', 'Farm Dairy', 'Healthy Grains', 'Herbal Plants', 'Seasonal Picks'].map((item) => (
                  <span key={item}>
                    <i className="bi bi-chevron-right me-1" style={{ fontSize: '11px' }}></i>{item}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="footer-newsletter">
                <h5>Newsletter</h5>
                <p>Subscribe to get the latest updates on fresh produce, farm news, and exclusive offers.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Your email address" />
                    <button className="btn btn-secondary" type="submit">Subscribe</button>
                  </div>
                </form>
                <p className="mb-0" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
                  <i className="bi bi-shield-check me-1 text-secondary"></i>
                  We respect your privacy. No spam ever.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                        <p>&copy; 2024 <span>TrueLeaves System</span>. All Rights Reserved.</p>
            <p>Designed with <i className="bi bi-heart-fill text-secondary mx-1"></i> for organic farming</p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="bi bi-arrow-up"></i>
      </button>
    </>
  );
}

export default Footer;
