import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Timeline from '@site/src/components/Timeline';
import { FaMicrosoft } from 'react-icons/fa6';
import { SiHashicorp } from 'react-icons/si';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroLeft}>
          <img
            src="/My-doku-website/img/profile.jpg"
            alt="Luca Comparini"
            className={styles.heroAvatar}
          />
        </div>
        <div className={styles.heroCenter}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            I design enterprise cloud solutions on Azure with an IaC-first mindset.
            I build CI/CD pipelines across GitHub, GitLab, and Azure DevOps.
            I bring Agentic AI and RAG patterns into business applications — always
            with cost awareness and end-to-end accountability.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--lg', styles.buttonPrimary)}
              to="/docs/sidebar1/energy-trading-settlement">
              Explore My Projects
            </Link>
            <a
              className={clsx('button button--lg', styles.buttonOutline)}
              href="/My-doku-website/Curriculum_Vitae_Luca_Comparini.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroCertTitle}>Certifications</div>
          <div className={styles.heroCertCard}>
            <FaMicrosoft size={22} color="#0078d4" />
            <div>
              <div className={styles.heroCertName}>PL-900</div>
              <div className={styles.heroCertIssuer}>Microsoft</div>
            </div>
          </div>
          <div className={styles.heroCertCard}>
            <SiHashicorp size={22} color="#7b42bc" />
            <div>
              <div className={styles.heroCertName}>Terraform Associate</div>
              <div className={styles.heroCertIssuer}>HashiCorp</div>
            </div>
          </div>
          <a
            href="/My-doku-website/IELTS_02-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroCertCard}
            style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}
          >
            <span style={{fontWeight: 900, fontSize: '1rem', color: '#c0392b'}}>IELTS</span>
            <div>
              <div className={styles.heroCertName}>C1 Advanced</div>
              <div className={styles.heroCertIssuer}>Cambridge</div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Luca Comparini — Azure Solution Architect, DevOps Engineer, and AI Enthusiast. Technical documentation portfolio.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Timeline />
      </main>
    </Layout>
  );
}
