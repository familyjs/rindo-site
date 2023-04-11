import React, { useEffect } from 'react';

import styles from './index.module.scss'

type DocSearchProps = {
  apiKey: string;
  indexName: string;
  inputSelector: string;
  debug: boolean;
}

interface CustomWindow extends Window {
  docsearch: (props: DocSearchProps) => void;
}

declare const window: CustomWindow;

export default function SearchBar() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js';
    script.async = true;
    script.onload = () => {
      window.docsearch({
        apiKey: '460d731eb73339debc2b7d3662c207ac',
        indexName: 'rindojs',
        inputSelector: '#algolia-search',
        debug: false // Set debug to true if you want to inspect the dropdown
      });
    };

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css';

    document.body.appendChild(script);
    document.head.appendChild(link);
  }, []);

  return (
    <div className={styles.search}>
      <input className={styles.searchInput} placeholder="Search docs..." id="algolia-search" />
    </div>
  );
}