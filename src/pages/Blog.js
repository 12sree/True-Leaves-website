import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import blog1 from '../common/img/blog-1.jpg';
import blog2 from '../common/img/blog-2.jpg';
import blog3 from '../common/img/blog-3.jpg';

const blogImages = [blog1, blog2, blog3, blog1, blog2, blog3, blog1, blog2, blog3, blog1];
const recentPosts = [blog1, blog2, blog3, blog1, blog2];
const tags = ['Design', 'Development', 'Marketing', 'SEO', 'Writing', 'Consulting', 'Design', 'Development', 'Marketing', 'SEO', 'Writing', 'Consulting'];

function Blog() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Blog Grid</h1>
              <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
              <a href="#" className="btn btn-secondary py-md-3 px-md-5">Blog Grid</a>
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Blog List */}
          <div className="col-lg-8">
            <div className="row g-5">
              {blogImages.map((img, i) => (
                <div className="col-md-6" key={i}>
                  <div className="blog-item position-relative overflow-hidden">
                    <img className="img-fluid" src={img} alt="Blog" />
                    <a className="blog-overlay" href="#">
                      <h4 className="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                      <span className="text-white fw-bold">Jan 01, 2050</span>
                    </a>
                  </div>
                </div>
              ))}
              <div className="col-12">
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-lg justify-content-center m-0">
                    <li className="page-item disabled">
                      <a className="page-link rounded-0" href="#" aria-label="Previous">
                        <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                      </a>
                    </li>
                    {[1, 2, 3].map((n) => (
                      <li className={`page-item ${n === 1 ? 'active' : ''}`} key={n}>
                        <a className="page-link" href="#">{n}</a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a className="page-link rounded-0" href="#" aria-label="Next">
                        <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="mb-5">
              <div className="input-group">
                <input type="text" className="form-control p-3" placeholder="Keyword" />
                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
              </div>
            </div>
            <div className="mb-5">
              <h2 className="mb-4">Categories</h2>
              <div className="d-flex flex-column justify-content-start bg-primary p-4">
                {['Web Design', 'Web Development', 'Web Development', 'Keyword Research', 'Email Marketing'].map((cat, i) => (
                  <a className="fs-5 fw-bold text-white mb-2" href="#" key={i}><i className="bi bi-arrow-right me-2"></i>{cat}</a>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <h2 className="mb-4">Recent Post</h2>
              <div className="bg-primary p-4">
                {recentPosts.map((img, i) => (
                  <div className={`d-flex overflow-hidden ${i < recentPosts.length - 1 ? 'mb-3' : ''}`} key={i}>
                    <img className="img-fluid flex-shrink-0" src={img} style={{ width: '75px' }} alt="Recent" />
                    <a href="#" className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <img src={blog1} alt="" className="img-fluid rounded" />
            </div>
            <div className="mb-5">
              <h2 className="mb-4">Tag Cloud</h2>
              <div className="d-flex flex-wrap m-n1">
                {tags.map((tag, i) => (
                  <a href="#" className="btn btn-primary m-1" key={i}>{tag}</a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-4">Plain Text</h2>
              <div className="bg-primary text-center text-white" style={{ padding: '30px' }}>
                <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                <a href="#" className="btn btn-secondary py-2 px-4">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
