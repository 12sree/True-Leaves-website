import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';

function Service() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">Our Services</span>
              <h1 className="text-white mb-3">Hydroponic Solutions For Every Grower</h1>
              <p className="text-white-50 mb-4">From commercial farm setups to home grow kits — we have everything you need to grow smarter.</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="/" className="text-white-50">Home</a></li>
                  <li className="breadcrumb-item active">Services</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Services />

      <Footer />
    </>
  );
}

export default Service;
