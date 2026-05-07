import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { SiTerraform } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';

const docs = [
  {
    title: 'Solution Architect',
    Icon: FaMicrosoft,
    color: '#0078d4',
    description: 'Cloud architecture documentation — design decisions, diagrams, and implementation notes.',
    to: '/docs/sidebar1/intro',
  },
  {
    title: 'Terraform Code',
    Icon: SiTerraform,
    color: '#7b42bc',
    description: 'Infrastructure as Code modules, patterns, and deployment guides.',
    to: '/docs/sidebar2/intro',
  },
];

export default function DocsPreview() {
  return (
    <section className="section section--alt">
      <div className="container">
        <Heading as="h2" className="sectionTitle">Documentation</Heading>
        <div className="docsPreviewGrid">
          {docs.map(({title, Icon, color, description, to}) => (
            <Link key={to} className="docsPreviewCard" to={to}>
              <div className="docsPreviewCardIcon">
                <Icon size={24} color={color} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="docsPreviewCardArrow">
                Browse docs <FiArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
