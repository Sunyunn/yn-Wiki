import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '',
    Svg: require('../../static/img/undraw_road_sign_re_3kc3.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/undraw_road_sign_re_3kc3.svg').default,
    description: (
      <>
        
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--2')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      
       
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        
     
    </section>
  );
}
