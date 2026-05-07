import feature from '../common/img/feature.png';

const trustPoints = [
  { icon: 'bi-check-circle-fill', text: 'End-to-end hydroponic solutions' },
  { icon: 'bi-check-circle-fill', text: 'Expert guidance & training' },
  { icon: 'bi-check-circle-fill', text: 'Designed for Indian conditions' },
  { icon: 'bi-check-circle-fill', text: 'Focus on profitability' },
  { icon: 'bi-check-circle-fill', text: 'Scalable systems for all levels' },
];

function Features({ style }) {
  return (
    <div className="container-fluid features-section py-5 pb-lg-0 my-5" style={style}>
      <div className="container py-5 pb-lg-0">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '600px' }} data-aos="fade-up">
          <span className="section-subtitle">Why Choose True Leaves System</span>
          <h2 className="section-title text-white">Why Growers Trust Us</h2>
        </div>
        <div className="row g-5 align-items-end">

          {/* Trust Points */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="d-flex flex-column gap-3">
              {trustPoints.map(({ icon, text }) => (
                <div className="feature-trust-item" key={text}>
                  <i className={`bi ${icon}`}></i>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="feature-quote mt-4">
              <i className="bi bi-quote fs-2"></i>
              <p className="mb-0 fst-italic fw-semibold">
                "We don't just build systems — we build successful growers."
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-lg-4" data-aos="fade-up">
            <div className="feature-center-card">
              <p className="text-muted">
                At True Leaves System, every solution is engineered for real-world results — combining cutting-edge hydroponic technology with hands-on expertise to help you grow smarter and earn better.
              </p>
              <img className="img-fluid" src={feature} alt="Feature" />
            </div>
          </div>

          {/* Stats */}
          <div className="col-lg-4" data-aos="fade-left">
            <div className="row g-3">
              {[
                { icon: 'bi-people-fill', value: '5000+', label: 'Growers Empowered' },
                { icon: 'bi-award-fill', value: '15+', label: 'Years Experience' },
                { icon: 'bi-graph-up-arrow', value: '98%', label: 'Success Rate' },
                { icon: 'bi-headset', value: '24/7', label: 'Expert Support' },
              ].map(({ icon, value, label }) => (
                <div className="col-6" key={label}>
                  <div className="feature-stat-card">
                    <i className={`bi ${icon}`}></i>
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
  );
}

export default Features;
