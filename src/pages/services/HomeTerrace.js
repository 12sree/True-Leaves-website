import ServiceLayout from './ServiceLayout';
import img from '../../common/img/service-3.jpeg';

const features = [
  'Compact and lightweight system designs',
  'Beginner-friendly setup and guidance',
  'Suitable for balconies, terraces, and rooftops',
  'Organic nutrient solutions included',
  'Seasonal crop planning support',
  'On-site installation available',
];

const benefits = [
  { icon: 'bi-house-heart', label: 'Grow at Home', desc: 'Enjoy fresh, pesticide-free vegetables right from your own terrace.' },
  { icon: 'bi-currency-rupee', label: 'Save on Groceries', desc: 'Reduce monthly vegetable expenses with your own harvest.' },
  { icon: 'bi-emoji-smile', label: 'Easy to Maintain', desc: 'Designed for beginners with minimal time and effort required.' },
];

function HomeTerrace() {
  return (
    <ServiceLayout
      title="Home & Terrace Gardening"
      subtitle="Fresh Greens from Your Own Rooftop"
      img={img}
      desc="Transform your balcony, terrace, or backyard into a productive green space. Our home gardening systems are lightweight, easy to maintain, and designed specifically for urban residential environments."
      features={features}
      benefits={benefits}
    />
  );
}

export default HomeTerrace;
