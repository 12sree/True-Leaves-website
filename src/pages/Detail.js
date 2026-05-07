import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import blog1 from '../common/img/blog-1.jpg';
import blog2 from '../common/img/blog-2.jpg';
import blog3 from '../common/img/blog-3.jpg';
import user from '../common/img/user.jpg';

const recentPosts = [blog1, blog2, blog3, blog1, blog2];
const tags = ['Design', 'Development', 'Marketing', 'SEO', 'Writing', 'Consulting', 'Design', 'Development', 'Marketing', 'SEO', 'Writing', 'Consulting'];
const comments = [
  { indent: false },
  { indent: false },
  { indent: true },
];

function Detail() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Blog Detail</h1>
              <span className="btn btn-primary py-md-3 px-md-5 me-3">Home</span>
              <span className="btn btn-secondary py-md-3 px-md-5">Blog Detail</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Detail */}
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-8">
            {/* Detail Content */}
            <div className="mb-5">
              <div className="row g-5 mb-5">
                <div className="col-md-6"><img className="img-fluid w-100" src={blog1} alt="Blog 1" /></div>
                <div className="col-md-6"><img className="img-fluid w-100" src={blog2} alt="Blog 2" /></div>
              </div>
              <h1 className="mb-4">Diam dolor est labore duo ipsum clita sed et lorem tempor duo</h1>
              <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
              <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.</p>
              <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat.</p>
            </div>

            {/* Comments */}
            <div className="mb-5">
              <h2 className="mb-4">3 Comments</h2>
              {comments.map(({ indent }, i) => (
                <div className={`d-flex mb-4 ${indent ? 'ms-5' : ''}`} key={i}>
                  <img src={user} className="img-fluid" style={{ width: '45px', height: '45px' }} alt="User" />
                  <div className="ps-3">
                    <h6><span>John Doe</span> <small><i>01 Jan 2045</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                    <button className="btn btn-sm btn-primary">Reply</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <div className="bg-primary p-5">
              <h2 className="text-white mb-4">Leave a comment</h2>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-white border-0" placeholder="Your Name" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control bg-white border-0" placeholder="Your Email" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control bg-white border-0" placeholder="Website" style={{ height: '55px' }} />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control bg-white border-0" rows="5" placeholder="Comment"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-secondary w-100 py-3" type="submit">Leave Your Comment</button>
                  </div>
                </div>
              </form>
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
                  <span className="fs-5 fw-bold text-white mb-2" key={i}><i className="bi bi-arrow-right me-2"></i>{cat}</span>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <h2 className="mb-4">Recent Post</h2>
              <div className="bg-primary p-4">
                {recentPosts.map((img, i) => (
                  <div className={`d-flex overflow-hidden ${i < recentPosts.length - 1 ? 'mb-3' : ''}`} key={i}>
                    <img className="img-fluid flex-shrink-0" src={img} style={{ width: '75px' }} alt="Recent" />
                    <span className="d-flex align-items-center bg-white text-dark fs-5 fw-bold px-3 mb-0">Lorem ipsum dolor sit amet elit</span>
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
                  <span className="btn btn-primary m-1" key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-4">Plain Text</h2>
              <div className="bg-primary text-center text-white" style={{ padding: '30px' }}>
                <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                <button className="btn btn-secondary py-2 px-4">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Detail;
