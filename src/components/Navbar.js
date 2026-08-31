import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../common/img/true-leaves-logo-inverted.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => path === '/' ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <>
      {/* Topbar */}
      <div className="topbar d-none d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <span><i className="bi bi-geo-alt-fill me-1"></i>EWS-B 951-13, Veerkalam, Coimbatore-641007</span>
              <span><i className="bi bi-telephone-fill me-1"></i>+91 8870309890</span>
              <span><i className="bi bi-envelope-fill me-1"></i>reachtrueleaves@gmail.com</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="topbar-social" aria-label="Twitter"><i className="fab fa-twitter"></i></button>
              <button className="topbar-social" aria-label="Facebook"><i className="fab fa-facebook-f"></i></button>
              <a className="topbar-social" href="https://www.linkedin.com/company/112359065/admin/page-posts/published/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a className="topbar-social" href="https://www.instagram.com/trueleavessystem/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-dark px-3 px-lg-5 py-2 py-lg-0 sticky-navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img src={logo} alt="TrueLeaves Logo" style={{ height: '45px', width: 'auto' }} />
          <span className="fw-bold text-white fs-5 d-none d-xl-block">
            <span className="text-secondary">True</span>Leaves
          </span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <div className="navbar-nav mx-auto py-0">
            {[
              { path: '/', label: 'Home' },
              {
                path: '/service',
                label: 'Service',
                submenu: [
                  { path: '/service/commercial-farming', label: 'Commercial Farming' },
                  { path: '/service/indoor-vertical-farming', label: 'Indoor Vertical Farming' },
                  { path: '/service/home-terrace-gardening', label: 'Home Terrace Gardening' },
                  { path: '/service/polyhouse-greenhouse-systems', label: 'Polyhouse Greenhouse Systems' },
                  { path: '/service/hydroponic-home-kits', label: 'Hydroponic Home Kits' },
                  { path: '/service/automation-smart-solutions', label: 'Automation & Smart Solutions' },
                ]
              },
              { path: '/product', label: 'Product' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label, submenu }) =>
              submenu ? (
                <div key={path} className="nav-item dropdown">
                  <Link
                    to={path}
                    className={`nav-link dropdown-toggle ${isActive(path) ? 'active' : ''}`}
                    data-bs-toggle="dropdown"
                  >
                    {label}
                  </Link>
                  <div className="dropdown-menu">
                    {submenu.map(({ path, label }) => (
                      <Link key={path} to={path} className="dropdown-item">
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={path}
                  to={path}
                  className={`nav-item nav-link ${isActive(path) ? 'active' : ''}`}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
