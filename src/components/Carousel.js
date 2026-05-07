import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import carousel1 from '../common/img/carousel-1.jpeg';
import carousel2 from '../common/img/carousel-2.jpeg';

const slides = [
  {
    img: carousel1,
    badge: 'Advanced Hydroponic Solutions',
    title: 'Grow More. Use Less. Earn Better.',
    desc: 'Advanced Hydroponic Solutions for Commercial Farms, Urban Homes & Smart Growers.',
    btns: [
      { label: 'Start Your Commercial Farm', to: '/contact', style: 'btn-secondary' },
      { label: 'Start Growing With Grow Kits', to: '/product', style: 'btn-outline-light' },
    ],
  },
  {
    img: carousel2,
    badge: 'Smart Growing Technology',
    title: 'Grow More. Use Less. Earn Better.',
    desc: 'Advanced Hydroponic Solutions for Commercial Farms, Urban Homes & Smart Growers.',
    btns: [
      { label: 'Start Your Commercial Farm', to: '/contact', style: 'btn-secondary' },
      { label: 'Start Growing With Grow Kits', to: '/product', style: 'btn-outline-light' },
    ],
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
        {slides.map(({ img, badge, title, desc, btns }, i) => (
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
                    <div className="d-flex gap-3 flex-wrap">
                      {btns.map(({ label, to, style }) => (
                        <Link key={label} to={to} className={`btn ${style} btn-lg rounded-pill px-4`}>
                          <i className={`bi ${style === 'btn-secondary' ? 'bi-building' : 'bi-basket'} me-2`}></i>
                          {label}
                        </Link>
                      ))}
                    </div>
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
