import ServiceLayout from './ServiceLayout';
import img from '../../common/img/service-4.jpeg';

const features = [
  'UV-stabilized polyfilm and glass options',
  'Ventilation and cooling system design',
  'Drip and fogger irrigation integration',
  'Shade net and thermal screen options',
  'Foundation and structural engineering',
  'Crop-specific environment tuning',
];

const benefits = [
  { icon: 'bi-cloud-sun', label: 'Weather Protection', desc: 'Shield crops from rain, wind, extreme heat, and cold.' },
  { icon: 'bi-thermometer-half', label: 'Temperature Control', desc: 'Maintain optimal growing temperatures throughout the year.' },
  { icon: 'bi-bar-chart-line', label: 'Consistent Output', desc: 'Predictable harvests with reduced crop loss and waste.' },
];

function PolyhouseGreenhouse() {
  return (
    <ServiceLayout
      title="Polyhouse & Greenhouse Systems"
      subtitle="Climate-Resilient Crop Protection"
      img={img}
      desc="Our polyhouse and greenhouse structures protect your crops from harsh weather while optimizing sunlight and temperature. Ideal for farmers who want consistent, year-round production regardless of external conditions."
      features={features}
      benefits={benefits}
    />
  );
}

export default PolyhouseGreenhouse;
