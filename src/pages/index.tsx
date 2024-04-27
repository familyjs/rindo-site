import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { useState } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const iconCopy = (
    <svg
      className="copy-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      aria-label="copy icon"
    >
      <path
        stroke="#73849A"
        strokeLinejoin="round"
        d="M12.72 4H5.78C4.8 4 4 4.8 4 5.78v6.94c0 .98.8 1.78 1.78 1.78h6.94c.98 0 1.78-.8 1.78-1.78V5.78c0-.98-.8-1.78-1.78-1.78Z"
      />
      <path
        stroke="#73849A"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.98 4 .02-.75a1.75 1.75 0 0 0-1.75-1.75H3.5a2 2 0 0 0-2 2v6.75A1.76 1.76 0 0 0 3.25 12H4"
      />
    </svg>
  );
  const iconCheckmark = (
    <svg
      className="copy-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 512 512"
      aria-label="checkmark icon"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M416 128L192 384l-96-96"
      />
    </svg>
  );

  const [copySuccess, setCopySuccess] = useState(iconCopy);

  async function copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
    setCopySuccess(iconCheckmark);
    setTimeout(() => setCopySuccess(iconCopy), 1000);
  }

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title text--primary">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          Rindo is a library for building reusable, scalable component libraries.
          <br />
          Generate small, blazing fast Web Components that run everywhere.
        </p>
        <div className={styles.buttons}>
          <Link
            className={`button ${styles.buttonRound} button--primary button--lg`}
            style={{ color: 'white' }}
            to="/docs/introduction"
          >
            <b>Get started →</b>
          </Link>
          <button
            className={`button ${styles.buttonRound} button--secondary button--lg`}
            style={{ fontStyle: 'normal', fontWeight: 'normal' }}
            onClick={() => {
              copyToClipboard('npm init rindo');
            }}
          >
            npm init rindo {copySuccess}
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
