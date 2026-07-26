import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import img from '../../common/img/service-5.jpeg';
import lettuceImg from '../../common/img/lettuce.jpg';
import earnFromHome from '../../common/img/earn-home.jpeg';
import microgreensImg from '../../common/img/microgreens.jpg';
import cherryTomatoImg from '../../common/img/cherry-tomato.jpg';

const keyBenefits = [
  { icon: 'bi-flower1', label: 'Grow Fresh & Healthy Food', desc: 'Harvest clean, fresh vegetables directly from your home garden.' },
  { icon: 'bi-droplet-half', label: 'Save Water', desc: 'Hydroponic systems use significantly less water compared to traditional gardening.' },
  { icon: 'bi-building', label: 'Perfect for Urban Homes', desc: 'Ideal for terraces, balconies, rooftops, and small outdoor spaces.' },
  { icon: 'bi-tree', label: 'No Soil, No Mess', desc: 'Cleaner growing with minimal maintenance and fewer weeds.' },
  { icon: 'bi-people-fill', label: 'Family-Friendly Gardening', desc: 'A fun and educational activity for families and children.' },
];

const cropCategories = [
  {
    title: 'Leafy Greens',
    cropImg: lettuceImg,
    icon: 'bi-flower1',
    items: ['Lettuce', 'Spinach', 'Kale', 'Pak Choi', 'Swiss Chard', 'Desi Greens'],
  },
  {
    title: 'Herbs',
    cropImg: null,
    icon: 'bi-tree',
    items: ['Mint', 'Basil', 'Coriander', 'Parsley', 'Thyme', 'Rosemary'],
  },
  {
    title: 'Fruiting Crops',
    cropImg: cherryTomatoImg,
    icon: 'bi-heart-fill',
    items: ['Cherry Tomato', 'Strawberry', 'Chilli', 'Cucumber', 'Tomato', 'Desi Vegetables'],
  },
  {
    title: 'Specialty Crops',
    cropImg: microgreensImg,
    icon: 'bi-star-fill',
    items: ['Microgreens', 'Edible Flowers', 'Baby Leaf Greens', 'Cauliflower', 'Cabbage', 'Broccoli'],
  },
];

const solutions = [
  { icon: 'bi-box-seam', title: 'Home Hydroponic Kits', desc: 'Compact systems for beginners and small families.' },
  { icon: 'bi-house-heart', title: 'Terrace Farming Systems', desc: 'Customized rooftop and terrace growing setups.' },
  { icon: 'bi-droplet-half', title: 'Nutrients & Accessories', desc: 'Everything required for healthy plant growth.' },
  { icon: 'bi-headset', title: 'Guidance & Support', desc: 'We help you from setup to successful harvesting.' },
];

const sideIncomeItems = {
  sell: ['Fresh leafy greens', 'Herbs', 'Microgreens', 'Strawberries'],
  to: ['Neighbours', 'Local stores', 'Cafes', 'Health-conscious customers'],
  benefits: ['Fresh premium produce', 'Local demand for healthy food', 'Small-scale low-risk selling opportunity', 'Potential monthly supplementary income'],
};

function HomeTerrace() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">Grow Fresh Food at Home</span>
              <h1 className="text-white mb-3">Home & Terrace Gardening</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/service" className="text-white-50">Services</Link></li>
                  <li className="breadcrumb-item active">Home & Terrace Gardening</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <img src={img} alt="Home & Terrace Gardening" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />

      {/* Intro */}
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="section-subtitle">Home & Terrace Hydroponic Gardening</span>
            <h2 className="section-title mb-3">Grow Fresh Food at Home — Healthy, Simple & Sustainable</h2>
            <p className="text-muted mb-3" style={{ lineHeight: '1.9' }}>
              Imagine harvesting fresh lettuce, herbs, strawberries, and vegetables directly from your own home.
              At True Leaves System, we help families, home growers, and urban gardeners create smart hydroponic gardens
              that turn balconies, terraces, and unused spaces into productive green areas.
            </p>
            <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
              {['No large farmland.', 'No complicated farming knowledge.', 'Just fresh, healthy food grown right at home.'].map((t) => (
                <span key={t} className="badge rounded-pill px-3 py-2" style={{ background: 'var(--light)', color: 'var(--primary)', fontSize: '0.88rem', fontWeight: 600 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="text-center mb-4" data-aos="fade-up">
          <span className="section-subtitle">Why Start a Home Hydroponic Garden?</span>
          <h2 className="section-title">Key Benefits</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>
            Modern lifestyles often make it difficult to access truly fresh and chemical-free vegetables. Hydroponic gardening offers a smarter way to grow your own food using less space, less water, and less effort.
          </p>
        </div>
        <div className="row g-4 mb-5">
          {keyBenefits.map(({ icon, label, desc }, i) => (
            <div className="col-lg-4 col-md-6" key={label} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="about-feature-card p-4 h-100">
                <i className={`bi ${icon} fs-1 text-primary mb-3 d-block`}></i>
                <h5>{label}</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.88rem' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crops Section */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">What You Can Grow</span>
            <h2 className="section-title">What Can You Grow?</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>Our home and terrace systems support a wide range of crops.</p>
          </div>
          <div className="row g-4">
            {cropCategories.map(({ title, cropImg, icon, items }, i) => (
              <div className="col-lg-3 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="service-card h-100">
                  {cropImg && (
                    <div className="service-card-img">
                      <img src={cropImg} alt={title} />
                    </div>
                  )}
                  <div className="service-card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="why-feature-icon flex-shrink-0">
                        <i className={`bi ${icon}`}></i>
                      </div>
                      <h5 className="mb-0">{title}</h5>
                    </div>
                    {items.map((item) => (
                      <div className="d-flex align-items-center gap-2 mb-1" key={item}>
                        <i className="bi bi-check-circle-fill text-primary" style={{ fontSize: '0.75rem' }}></i>
                        <span style={{ fontSize: '0.88rem' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terrace + Beginner */}
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="mission-card h-100">
              <div className="mission-icon"><i className="bi bi-house-heart"></i></div>
              <h4>Terrace Gardening Solutions</h4>
              <p className="text-muted mb-3">Turn your terrace into a productive food-growing space. Our terrace systems are designed to:</p>
              {['Maximize growing area', 'Handle outdoor conditions', 'Be easy to maintain', 'Fit different terrace sizes'].map((item) => (
                <div className="d-flex align-items-center gap-2 mb-2" key={item}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span style={{ fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
              <p className="text-muted mt-3 mb-0" style={{ fontSize: '0.88rem' }}>Whether you want a small family garden or a larger terrace setup, we help you build a system that suits your space and lifestyle.</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="mission-card h-100">
              <div className="mission-icon"><i className="bi bi-emoji-smile"></i></div>
              <h4>Beginner-Friendly Systems</h4>
              <p className="text-muted mb-3">Even if you have never grown a plant before, you can start easily. Our systems include:</p>
              {['Simple plug-and-play setup', 'Easy maintenance', 'Step-by-step guidance', 'Beginner support & training'].map((item) => (
                <div className="d-flex align-items-center gap-2 mb-2" key={item}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span style={{ fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
              <p className="mt-3 mb-0 fw-semibold text-primary">No prior farming experience required.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Income */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <img src={earnFromHome} alt="Side Income" className="img-fluid rounded-3 w-100" style={{ objectFit: 'cover', maxHeight: '380px' }} />
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <span className="section-subtitle">Earn From Home</span>
              <h3 className="section-title mb-3">Small Income Opportunity for Home Growers</h3>
              <p className="text-muted mb-4">Home hydroponic gardening can also create a small side income opportunity. Many home growers sell:</p>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <h6 className="mb-2">What you can sell:</h6>
                  {sideIncomeItems.sell.map((item) => (
                    <div className="d-flex align-items-center gap-2 mb-1" key={item}>
                      <i className="bi bi-arrow-right-short text-primary fs-5"></i>
                      <span style={{ fontSize: '0.88rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  <h6 className="mb-2">Who buys:</h6>
                  {sideIncomeItems.to.map((item) => (
                    <div className="d-flex align-items-center gap-2 mb-1" key={item}>
                      <i className="bi bi-arrow-right-short text-primary fs-5"></i>
                      <span style={{ fontSize: '0.88rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {sideIncomeItems.benefits.map((b) => (
                <div className="d-flex align-items-center gap-2 mb-2" key={b}>
                  <i className="bi bi-check-circle-fill text-primary"></i>
                  <span style={{ fontSize: '0.9rem' }}>{b}</span>
                </div>
              ))}
              <p className="mt-3 fw-semibold text-primary mb-0">Start for your family first, then grow step by step.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title">Our Home & Terrace Gardening Solutions Include</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {solutions.map(({ icon, title, desc }, i) => (
            <div className="col-lg-3 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="about-feature-card text-center p-4 h-100">
                <i className={`bi ${icon} fs-1 text-primary mb-3 d-block`}></i>
                <h5>{title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: '0.88rem' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container-fluid why-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7" data-aos="fade-up">
              <i className="bi bi-quote fs-1 mb-3 d-block" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
              <h3 className="text-white mb-3">Grow Your Own Food, Your Own Way</h3>
              <p className="mb-2" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.9' }}>
                Home hydroponic gardening is more than a hobby — it is a smarter way to live healthier, greener, and more sustainably.
                At True Leaves System, we make modern growing simple, practical, and accessible for everyone.
              </p>
              <p className="fw-semibold mb-4" style={{ color: 'rgba(255,255,255,0.95)' }}>Fresh food starts at home.</p>
              <Link to="/contact" className="btn btn-light rounded-pill px-5">
                <i className="bi bi-calendar-check me-2"></i>Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomeTerrace;
