import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import AboutSection from '../components/About';
import Facts from '../components/Facts';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Services />
      <AboutSection />
      <Facts />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
