import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Detail from './pages/Detail';
import Feature from './pages/Feature';
import Service from './pages/Service';
import CommercialFarming from './pages/services/CommercialFarming';
import IndoorVerticalFarming from './pages/services/IndoorVerticalFarming';
import HomeTerrace from './pages/services/HomeTerrace';
import PolyhouseGreenhouse from './pages/services/PolyhouseGreenhouse';
import HydroponicHomeKits from './pages/services/HydroponicHomeKits';
import AutomationSmartSolutions from './pages/services/AutomationSmartSolutions';
import EnquiryForm from './pages/EnquiryForm';
import Product from './pages/Product';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

const WA_LINK = "https://wa.me/918870309890?text=Hi";

function App() {
  return (
    <BrowserRouter>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/commercial-farming" element={<CommercialFarming />} />
        <Route path="/service/indoor-vertical-farming" element={<IndoorVerticalFarming />} />
        <Route path="/service/home-terrace-gardening" element={<HomeTerrace />} />
        <Route path="/service/polyhouse-greenhouse-systems" element={<PolyhouseGreenhouse />} />
        <Route path="/service/hydroponic-home-kits" element={<HydroponicHomeKits />} />
        <Route path="/service/automation-smart-solutions" element={<AutomationSmartSolutions />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<EnquiryForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
