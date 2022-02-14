import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '../components/HomepageFeatures';
import Aboutme from '../components/about';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Box sx={{ display: 'flex' }}>
          <Box m="auto">
            <Avatar
              alt="Ayaz Zafar"
              src={useBaseUrl('https://ayazzafar.tech/images/profilepic.jpg')}
              sx={{ width: 150, height: 150, m: 2 }}
            />
          </Box>
        </Box>
        <p className="hero__subtitle">Hello! I am Ayaz Zafar. Web Developer, IT Technician and Photographer.</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Blog of Ayaz Zafar">
      <HomepageHeader />
      <Aboutme />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
