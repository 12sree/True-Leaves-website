import blog1 from '../common/img/blog-1.jpg';
import blog2 from '../common/img/blog-2.jpg';
import blog3 from '../common/img/blog-3.jpg';

const blogs = [
  { img: blog1, title: 'How Organic Farming Benefits Your Health', date: 'Jan 01, 2024' },
  { img: blog2, title: 'Sustainable Agriculture: The Future of Farming', date: 'Feb 15, 2024' },
  { img: blog3, title: 'From Farm to Table: Our Harvesting Process', date: 'Mar 10, 2024' },
];

function BlogSection() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '500px' }} data-aos="fade-up">
          <span className="section-subtitle">Our Blog</span>
          <h2 className="section-title">Latest Articles From Our Blog</h2>
        </div>
        <div className="row g-4">
          {blogs.map(({ img, title, date }, i) => (
            <div className="col-lg-4" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="blog-item position-relative overflow-hidden">
                <img className="img-fluid w-100" src={img} alt={title} />
                <a className="blog-overlay" href="#">
                  <span>{date}</span>
                  <h4>{title}</h4>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
