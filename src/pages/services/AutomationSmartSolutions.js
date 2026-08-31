import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import img from '../../common/img/automation-6.jpeg';

const keyBenefits = [
  { icon: 'bi-phone', label: 'Remote Monitoring', desc: 'Monitor your farm from anywhere via smartphone or tablet in real time.' },
  { icon: 'bi-robot', label: 'AI-Powered Control', desc: 'Smart algorithms automatically optimize nutrient delivery and growth cycles.' },
  { icon: 'bi-clock-history', label: 'Save Time & Labour', desc: 'Automation reduces daily manual tasks by up to 80%.' },
  { icon: 'bi-graph-up-arrow', label: 'Better Crop Quality', desc: 'Precision control ensures consistent nutrient supply for premium produce.' },
  { icon: 'bi-shield-check', label: 'Reduced Human Error', desc: 'Automated systems eliminate inconsistencies caused by manual operations.' },
  { icon: 'bi-bar-chart-line', label: 'Data-Driven Decisions', desc: 'Analytics and reports help you optimize production and profitability.' },
];

const automationSystems = [
  {
    title: 'Automated Nutrient Dosing',
    icon: 'bi-droplet-half',
    desc: 'Precision nutrient dosing systems that automatically mix and deliver the right nutrient concentration to your crops.',
    features: ['EC & pH auto-adjustment', 'Scheduled dosing cycles', 'Multi-tank nutrient management', 'Alarm & alert system'],
  },
  {
    title: 'Remote Monitoring System',
    icon: 'bi-phone',
    desc: 'Monitor all critical farm parameters remotely through a mobile app or web dashboard.',
    features: ['Real-time sensor data', 'Mobile app access', 'Historical data logging', 'Instant alert notifications'],
  },
  {
    title: 'Smart Irrigation Control',
    icon: 'bi-moisture',
    desc: 'Automated irrigation controllers that manage watering schedules based on crop needs and environmental conditions.',
    features: ['Timer-based irrigation', 'Sensor-triggered watering', 'Zone-wise control', 'Water usage tracking'],
  },
  {
    title: 'Climate Control Automation',
    icon: 'bi-thermometer-half',
    desc: 'Automated systems to manage temperature, humidity, and ventilation inside your growing environment.',
    features: ['Temperature monitoring', 'Humidity control', 'Fan & cooling automation', 'Grow light scheduling'],
  },
];

const sensors = [
  { icon: 'bi-activity', label: 'pH Sensors', desc: 'Continuously monitor solution pH for optimal nutrient uptake.' },
  { icon: 'bi-lightning-charge', label: 'EC Sensors', desc: 'Track electrical conductivity to ensure correct nutrient strength.' },
  { icon: 'bi-thermometer-half', label: 'Temperature Sensors', desc: 'Monitor air and water temperature in real time.' },
  { icon: 'bi-droplet', label: 'Humidity Sensors', desc: 'Track relative humidity to prevent disease and optimize growth.' },
  { icon: 'bi-sun', label: 'Light Sensors', desc: 'Measure light intensity and automate grow light schedules.' },
  { icon: 'bi-water', label: 'Water Level Sensors', desc: 'Automatically detect and alert low reservoir water levels.' },
  { icon: 'bi-thermometer-half', label: 'CO2 Mointors', desc: 'Monitor air and water temperature in real time.' },
  { icon: 'bi-droplet', label: 'Water O2 Level Monitors', desc: 'Track relative humidity to prevent disease and optimize growth.' },
  { icon: 'bi-sun', label: 'Water Consumption Monitors', desc: 'Measure light intensity and automate grow light schedules.' },
  { icon: 'bi-water', label: 'Electricity Power Consumption Monitors', desc: 'Automatically detect and alert low reservoir water levels.' },
];

const solutions = [
  { title: 'Farm Automation Planning', items: ['System requirement analysis', 'Automation level selection', 'Integration planning'] },
  { title: 'Sensor & Controller Setup', items: ['pH & EC sensor installation', 'Temperature & humidity sensors', 'Controller configuration'] },
  { title: 'Remote Monitoring Setup', items: ['Mobile app configuration', 'Dashboard setup', 'Alert & notification setup'] },
  { title: 'Nutrient Dosing Systems', items: ['Dosing pump installation', 'Nutrient scheduling', 'Auto-calibration setup'] },
  { title: 'Training & Support', items: ['System operation training', 'Troubleshooting guidance', 'Ongoing technical support'] },
];

const targetAudience = [
  'Commercial hydroponic farmers', 'Greenhouse operators', 'Large-scale indoor farms',
  'Tech-forward agribusinesses', 'Farm managers', 'Entrepreneurs scaling operations',
];

function AutomationSmartSolutions() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-7" data-aos="fade-right">
              <span className="section-subtitle">AI-Driven Farming Technology</span>
              <h1 className="text-white mb-3">Automation & Smart Solutions</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/service" className="text-white-50">Services</Link></li>
                  <li className="breadcrumb-item active">Automation & Smart Solutions</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <img src={img} alt="Automation & Smart Solutions" style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />

      {/* Intro */}
      <div className="container py-5">
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <span className="section-subtitle">Smart Farming Technology</span>
            <h2 className="section-title mb-3">Farm Smarter. Grow Better. Earn More.</h2>
            <p className="text-muted" style={{ lineHeight: '1.9' }}>
              At True Leaves System, we integrate smart automation and IoT-based monitoring solutions into hydroponic farms to reduce manual effort, improve crop consistency, and maximize profitability.
              From AI-driven nutrient dosers to remote monitoring sensors, our smart solutions help you manage your farm from anywhere with precision and confidence.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="text-center mb-4" data-aos="fade-up">
          <span className="section-subtitle">Why Automate Your Farm?</span>
          <h2 className="section-title">Key Benefits</h2>
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

      {/* Automation Systems */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Our Technology</span>
            <h2 className="section-title">Automation Systems We Provide</h2>
          </div>
          <div className="row g-4">
            {automationSystems.map(({ title, icon, desc, features }, i) => (
              <div className="col-lg-3 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="mission-card h-100">
                  <div className="mission-icon"><i className={`bi ${icon}`}></i></div>
                  <h5>{title}</h5>
                  <p className="text-muted mb-3" style={{ fontSize: '0.88rem' }}>{desc}</p>
                  {features.map((f) => (
                    <div className="d-flex align-items-center gap-2 mb-1" key={f}>
                      <i className="bi bi-check-circle-fill text-primary" style={{ fontSize: '0.75rem' }}></i>
                      <span style={{ fontSize: '0.82rem' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sensors */}
      <div className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="section-subtitle">Monitoring Technology</span>
          <h2 className="section-title">Sensors & Monitoring Devices</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>Our smart monitoring systems use precision sensors to track every critical parameter of your farm.</p>
        </div>
        <div className="row g-4">
          {sensors.map(({ icon, label, desc }, i) => (
            <div className="col-lg-4 col-md-6" key={label} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="d-flex align-items-start gap-3 p-3 rounded-3 bg-light h-100">
                <div className="why-feature-icon flex-shrink-0"><i className={`bi ${icon}`}></i></div>
                <div>
                  <h6 className="mb-1">{label}</h6>
                  <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="section-title">Our Automation Solutions Include</h2>
          </div>
          <div className="row g-4">
            {solutions.map(({ title, items }, i) => (
              <div className="col-lg-4 col-md-6" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="mission-card h-100">
                  <div className="mission-icon"><i className="bi bi-check2-all"></i></div>
                  <h5>{title}</h5>
                  {items.map((item) => (
                    <div className="d-flex align-items-center gap-2 mb-2" key={item}>
                      <i className="bi bi-arrow-right-short text-primary fs-5"></i>
                      <span style={{ fontSize: '0.88rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who Is This For + CTA */}
      <div className="container-fluid why-section py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="section-subtitle">Ideal For</span>
              <h2 className="section-title text-white mb-4">Who Is This For?</h2>
              <div className="row g-3">
                {targetAudience.map((item) => (
                  <div className="col-md-6" key={item}>
                    <div className="why-feature-card">
                      <div className="why-feature-icon flex-shrink-0"><i className="bi bi-person-check-fill"></i></div>
                      <span className="text-white">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="why-quote-card p-5">
                <i className="bi bi-quote fs-1 mb-3 d-block" style={{ color: 'rgba(255,255,255,0.3)' }}></i>
                <h4 className="text-white mb-3">The Future of Farming is Smart</h4>
                <p className="mb-4">
                  Smart automation is no longer a luxury — it is a necessity for modern, profitable farming.
                  At True Leaves System, we help you integrate the right technology to reduce costs, improve quality, and scale your farm with confidence.
                </p>
                <Link to="/contact" className="btn btn-light rounded-pill px-4">
                  <i className="bi bi-calendar-check me-2"></i>Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AutomationSmartSolutions;
