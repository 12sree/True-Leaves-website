import ServiceLayout from './ServiceLayout';
import img from '../../common/img/serivice-2.jpeg';

const features = [
  'Multi-tier vertical rack systems',
  'Full-spectrum LED grow light setup',
  'Climate control and HVAC integration',
  'Automated irrigation and nutrient delivery',
  'Space utilization planning',
  'Crop rotation scheduling',
];

const benefits = [
  { icon: 'bi-layers', label: 'Space Efficient', desc: 'Grow vertically and multiply your production area without expanding footprint.' },
  { icon: 'bi-lightning-charge', label: 'Energy Optimized', desc: 'Smart LED systems reduce energy costs while maximizing plant growth.' },
  { icon: 'bi-shield-check', label: 'Pest-Free', desc: 'Enclosed environments eliminate the need for pesticides.' },
];

function IndoorVerticalFarming() {
  return (
    <ServiceLayout
      title="Indoor & Vertical Farming"
      subtitle="Grow More in Less Space"
      img={img}
      desc="Maximize limited space with stacked growing systems and specialized LED lighting. Our vertical farming setups are ideal for warehouses, unused buildings, and urban spaces where land is scarce but demand is high."
      features={features}
      benefits={benefits}
    />
  );
}

export default IndoorVerticalFarming;
