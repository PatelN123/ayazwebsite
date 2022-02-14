import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const featureme = [
  {
    title: 'About Me',
    description: (
      <>
Hello! I am <strong>Ayaz Zafar</strong>. Web Developer, IT Technician and Photographer.<br />

A highly motivated and hardworking individual, who has experience in computing. I work exceptionally well in a team both as a leader and a follower as i believe that great companies are built on teamwork and cooperation. With a keen interest in technology from a young age (the interest has gone better and better as the years went on).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Aboutme() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureme.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
