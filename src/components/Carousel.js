import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import carousel1 from '../common/img/commercial-6.jpeg';
import carousel2 from '../common/img/commercial-7.jpeg';

const slides = [
  {
    img: carousel1,
    badge: 'Advanced Hydroponic Solutions',
    title: 'Grow More. Use Less. Earn Better.',
    desc: 'Advanced Hydroponic Solutions for Commercial Farms, Urban Homes & Smart Growers.',
  },
  {
    img: carousel2,
    badge: 'Smart Growing Technology',
    title: 'Grow More. Use Less. Earn Better.',
    desc: 'Advanced Hydroponic Solutions for Commercial Farms, Urban Homes & Smart Growers.',
  },
];

function Carousel() {
  return (
    <div className="hero-carousel">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="hero-swiper"
      >
        {slides.map(({ img, badge, title, desc }, i) => (
          <SwiperSlide key={i}>
            <div className="hero-slide" style={{ backgroundImage: `url(${img})` }}>
              <div className="hero-overlay"></div>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-lg-8" data-aos="fade-right" data-aos-duration="1000">
                    <span className="hero-badge">
                      <i className="bi bi-patch-check-fill me-2"></i>{badge}
                    </span>
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-desc">{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
