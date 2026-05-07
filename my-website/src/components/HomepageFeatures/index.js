import clsx from 'clsx';
import Heading from '@theme/Heading';
import { SiTerraform, SiGithubactions, SiOpenai } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa6';
import { VscServerProcess } from 'react-icons/vsc';
import { FiCloud, FiGitMerge } from 'react-icons/fi';
import styles from './styles.module.css';

const WorkWithList = [
  {
    title: 'Azure',
    Icon: FaMicrosoft,
    color: '#0078d4',
    description: 'Enterprise cloud platform — compute, networking, data, and AI services.',
  },
  {
    title: 'Terraform',
    Icon: SiTerraform,
    color: '#7b42bc',
    description: 'Infrastructure as Code for repeatable, version-controlled environments.',
  },
];

const BuildList = [
  {
    title: 'Cloud Architecture',
    Icon: FiCloud,
    color: '#0078d4',
    description: 'Designing scalable, secure, and cost-effective cloud solutions for enterprise.',
  },
  {
    title: 'CI/CD Pipelines',
    Icon: SiGithubactions,
    color: '#2088ff',
    description: 'End-to-end delivery pipelines on GitHub Actions, GitLab CI, and Azure DevOps.',
  },
  {
    title: 'RAG & Agentic AI',
    Icon: SiOpenai,
    color: '#10a37f',
    description: 'Retrieval-Augmented Generation and multi-agent orchestration on Azure.',
  },
  {
    title: 'ETL Pipelines',
    Icon: VscServerProcess,
    color: '#e8590c',
    description: 'Data integration and transformation on Azure Data Factory.',
  },
];

function Feature({Icon, title, description, color}) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIconWrap}>
          <Icon size={36} color={color} />
        </div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <Heading as="h2" className="sectionTitle">What I Work With</Heading>
          <div className={clsx('row', styles.featureRow)}>
            {WorkWithList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={clsx(styles.features, styles.featuresAlt)}>
        <div className="container">
          <Heading as="h2" className="sectionTitle">What I Build</Heading>
          <div className={clsx('row', styles.featureRow)}>
            {BuildList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
