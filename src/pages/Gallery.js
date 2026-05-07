import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GallerySection from '../components/Gallery';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">Our Work</span>
              <h1 className="text-white mb-3">Gallery</h1>
              <p className="text-white-50 mb-4">Explore our hydroponic farms, installations, and success stories.</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item active">Gallery</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Visual Showcase</span>
            <h2 className="section-title">Our Hydroponic Projects</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '550px' }}>
              A glimpse into the farms, systems, and green spaces we have built across India.
            </p>
          </div>
          <GallerySection />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
