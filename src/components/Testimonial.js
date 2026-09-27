const testimonials = [
  { name: 'Priya Sharma', role: 'Home Chef & Parent', text: 'TrueLeaves brings incredibly fresh, chemical-free greens right to our kitchen. The quality and crisp taste make it easy to get my kids to eat healthy every day.' },
  { name: 'Arjun Malhotra', role: 'Cafe Owner & Head Chef', text: "Consistency and premium quality dictate my menu's success. TrueLeaves supplies excellent organic produce that consistently elevates our restaurant's signature dishes." },
  { name: 'Ananya Iyer', role: 'Wellness Blogger / Yoga Instructor', text: 'A wholesome lifestyle starts with nutrient-dense food. TrueLeaves offers clean, sustainably grown produce that has drastically boosted my daily energy levels.' },
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
          {testimonials.map(({ name, role, text }, i) => (
            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="testimonial-card">
                <p>"{text}"</p>
                <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                <h5>{name}</h5>
                <span>{role}</span>
                <div className="mb-3">
                  {[...Array(5)].map((_, s) => (
                    <i key={s} className="bi bi-star-fill text-secondary me-1" style={{ fontSize: '13px' }}></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
