import React from 'react';
import Logo from '@theme/Logo';

import styles from './index.module.scss';

export default function NavbarLogo(): JSX.Element {
  return (
    <div className={styles.navbar}>
      <Logo
        className="navbar__brand"
        imageClassName="navbar__logo"
        titleClassName="navbar__title text--truncate"
      />
    </div>
  );
}
