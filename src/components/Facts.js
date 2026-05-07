const facts = [
  { icon: 'fa-star', label: 'Our Experience', value: '15+' },
  { icon: 'fa-users', label: 'Farm Specialists', value: '50+' },
  { icon: 'fa-check', label: 'Complete Projects', value: '200+' },
  { icon: 'fa-heart', label: 'Happy Clients', value: '5000+' },
];

function Facts() {
  return (
    <div className="container-fluid facts-section py-5 mb-5">
      <div className="container py-5">
        <div className="row gx-4 gy-4">
          {facts.map(({ icon, label, value }, i) => (
            <div className="col-lg-3 col-md-6" key={label} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="fact-card">
                <div className="fact-icon">
                  <i className={`fa ${icon}`}></i>
                </div>
                <div>
                  <h2>{value}</h2>
                  <h5>{label}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facts;
