import Heading from '@theme/Heading';
import { FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa6';

const links = [
  {
    label: 'lc96@protonmail.com',
    href: 'mailto:lc96@protonmail.com',
    Icon: FiMail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/redliuk',
    Icon: SiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luca-comparini-573112255/',
    Icon: FaLinkedinIn,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Heading as="h2" className="sectionTitle">Get in Touch</Heading>
        <div className="contactLinks">
          {links.map(({label, href, Icon}) => (
            <a
              key={href}
              className="contactLink"
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            >
              <Icon size={22} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
