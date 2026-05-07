import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Features from '../components/Features';

function Product() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Our Products</h1>
              <span className="btn btn-primary py-md-3 px-md-5 me-3">Home</span>
              <span className="btn btn-secondary py-md-3 px-md-5">Products</span>
            </div>
          </div>
        </div>
      </div>

      <Products />
      <Features style={{ marginTop: '3rem', marginBottom: '135px' }} />

      <Footer />
    </>
  );
}

export default Product;
