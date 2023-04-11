import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Simple',
    description: (
      <>
        With intentionally small tooling, a tiny API, and out-of-the-box configuration,
        Rindo gets out of the way and lets you focus.
      </>
    ),
  },
  {
    title: 'Performant',
    description: (
      <>
        A tiny runtime and the raw power of native Web Components make Rindo one of
        the fastest compilers around.
      </>
    ),
  },
  {
    title: 'Future proof',
    description: (
      <>
        Build cross-framework component libraries on open web standards, and break
        free of Framework Churn.
      </>
    ),
  },
  {
    title: 'Framework-agnostic',
    description: (
      <>
        Rindo components are just Web Components, so they will work with any major
        framework—or no framework at all.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
