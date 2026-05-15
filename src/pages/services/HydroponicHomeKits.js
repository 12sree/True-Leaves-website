import ServiceLayout from './ServiceLayout';
import img from '../../common/img/service-5.jpeg';

const features = [
  'Complete kit with all components included',
  'Step-by-step setup guide',
  'Starter nutrient solution pack',
  'Seed selection assistance',
  'Online support and tutorials',
  'Upgrade paths as you grow',
];

const benefits = [
  { icon: 'bi-box-seam', label: 'All-in-One Kit', desc: 'Everything you need arrives in one box, ready to assemble.' },
  { icon: 'bi-clock', label: 'Quick Setup', desc: 'Get your system running in under an hour with our guide.' },
  { icon: 'bi-patch-check', label: 'Proven Results', desc: 'Thousands of happy home growers across India.' },
];

function HydroponicHomeKits() {
  return (
    <ServiceLayout
      title="Hydroponic Home Kits"
      subtitle="Plug-and-Play Starter Sets"
      img={img}
      desc="Our home kits are the easiest way to start growing your own food. Everything you need is included — just set it up, add water and nutrients, and watch your plants thrive. Perfect for first-time growers."
      features={features}
      benefits={benefits}
    />
  );
}

export default HydroponicHomeKits;
