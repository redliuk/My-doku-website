import Heading from '@theme/Heading';
import { SiHashicorp } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa6';

const certs = [
  {
    name: 'PL-900',
    issuer: 'Microsoft Power Platform Fundamentals',
    Icon: FaMicrosoft,
    color: '#0078d4',
  },
  {
    name: 'Terraform Associate (003)',
    issuer: 'HashiCorp Certified',
    Icon: SiHashicorp,
    color: '#7b42bc',
  },
];

export default function Certifications() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Heading as="h2" className="sectionTitle">Certifications</Heading>
        <div className="certGrid">
          {certs.map(({name, issuer, Icon, color}, idx) => (
            <div className="certCard" key={idx}>
              <div className="certIcon">
                <Icon size={28} color={color} />
              </div>
              <div className="certName">{name}</div>
              <div className="certIssuer">{issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
