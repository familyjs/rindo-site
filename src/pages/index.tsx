import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {

  const iconCopy = <svg className="copy-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" aria-label="copy icon"><path stroke="#73849A" stroke-linejoin="round" d="M12.72 4H5.78C4.8 4 4 4.8 4 5.78v6.94c0 .98.8 1.78 1.78 1.78h6.94c.98 0 1.78-.8 1.78-1.78V5.78c0-.98-.8-1.78-1.78-1.78Z"></path><path stroke="#73849A" stroke-linecap="round" stroke-linejoin="round" d="m11.98 4 .02-.75a1.75 1.75 0 0 0-1.75-1.75H3.5a2 2 0 0 0-2 2v6.75A1.76 1.76 0 0 0 3.25 12H4"></path></svg>
  const iconCheckmark = <svg className="copy-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" aria-label="checkmark icon"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path></svg>

  const [copySuccess, setCopySuccess] = useState(iconCopy);
  const {siteConfig} = useDocusaurusContext();

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    setCopySuccess(iconCheckmark);
    setTimeout(() => setCopySuccess(iconCopy), 1000);
  };

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title primaryText">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>
          Rindo is a library for building reusable, scalable component libraries.
          <br/>Generate small, blazing fast Web Components that run everywhere.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg buttonPrimary"
            to="/docs/introduction">
            <b>Get started →</b>
          </Link>
          <button className="button button--secondary button--lg"
            onClick={() => {copyToClipboard("npm init rindo")}}>
            npm init rindo
            { copySuccess }
          </button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
