import ServiceLayout from './ServiceLayout';
import img from '../../common/img/service-6.jpeg';

const features = [
  'Automated nutrient dosing systems',
  'Remote monitoring via mobile app',
  'pH and EC sensor integration',
  'Smart irrigation controllers',
  'Alert and notification systems',
  'Data analytics and growth reports',
];

const benefits = [
  { icon: 'bi-phone', label: 'Remote Control', desc: 'Monitor and manage your farm from anywhere via smartphone.' },
  { icon: 'bi-robot', label: 'AI-Powered', desc: 'Smart algorithms optimize nutrient delivery and growth cycles.' },
  { icon: 'bi-clock-history', label: 'Save Time', desc: 'Automation reduces daily manual tasks by up to 80%.' },
];

function AutomationSmartSolutions() {
  return (
    <ServiceLayout
      title="Automation & Smart Solutions"
      subtitle="AI-Driven Farming Technology"
      img={img}
      desc="Take the guesswork out of farming with our smart automation systems. From AI-driven nutrient dosers to remote monitoring sensors, we help you manage your farm from anywhere with minimal manual effort."
      features={features}
      benefits={benefits}
    />
  );
}

export default AutomationSmartSolutions;
