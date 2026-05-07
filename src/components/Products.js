import product1 from '../common/img/product-1.png';
import product2 from '../common/img/product-2.png';

const products = [
  { img: product1, name: 'Organic Vegetable', price: '$19.00' },
  { img: product2, name: 'Organic Fruit', price: '$15.00' },
  { img: product1, name: 'Fresh Greens', price: '$12.00' },
  { img: product2, name: 'Farm Basket', price: '$25.00' },
  { img: product1, name: 'Seasonal Mix', price: '$22.00' },
];

function Products() {
  return (
    <div className="container-fluid py-5 products-bg">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }} data-aos="fade-up">
          <span className="section-subtitle">Fresh Picks</span>
          <h2 className="section-title">Our Fresh &amp; Organic Products</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {products.map(({ img, name, price }, i) => (
            <div className="col-lg-2 col-md-4 col-sm-6 pb-5" key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="product-item position-relative text-center">
                <div style={{ overflow: 'hidden' }}>
                  <img className="img-fluid mb-3" src={img} alt={name} />
                </div>
                <h6 className="mb-1 px-3">{name}</h6>
                <h5 className="text-primary px-3">{price}</h5>
                <div className="btn-action">
                  <a className="btn btn-sm btn-primary rounded-pill px-3" href="#"><i className="bi bi-cart me-1"></i>Add</a>
                  <a className="btn btn-sm btn-secondary rounded-pill px-3" href="#"><i className="bi bi-eye me-1"></i>View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
