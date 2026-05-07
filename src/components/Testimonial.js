import testimonial1 from '../common/img/testimonial-1.jpg';
import testimonial2 from '../common/img/testimonial-2.jpg';

const testimonials = [
  { img: testimonial1, name: 'Sarah Johnson', role: 'Regular Customer', text: 'The freshest vegetables I have ever tasted! TrueLeaves delivers quality produce that you can truly taste the difference. My family loves everything we order.' },
  { img: testimonial2, name: 'Michael Brown', role: 'Restaurant Owner', text: 'As a chef, quality ingredients are everything. TrueLeaves consistently delivers the best organic produce. My customers always compliment the freshness of our dishes.' },
  { img: testimonial1, name: 'Emily Davis', role: 'Health Enthusiast', text: 'Switching to TrueLeaves organic produce has been life-changing. Knowing exactly where my food comes from gives me peace of mind for my family.' },
];

function Testimonial() {
  return (
    <div className="container-fluid bg-testimonial py-5 my-5">
      <div className="container py-5">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }} data-aos="fade-up">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title text-white">What Our Customers Say</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {testimonials.map(({ img, name, role, text }, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="testimonial-card">
                <img src={img} alt={name} />
                <div className="mb-3">
                  {[...Array(5)].map((_, s) => (
                    <i key={s} className="bi bi-star-fill text-secondary me-1" style={{ fontSize: '13px' }}></i>
                  ))}
                </div>
                <p>"{text}"</p>
                <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <h5>{name}</h5>
                <span>{role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
