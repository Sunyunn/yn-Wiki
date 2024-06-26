import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '',
    Svg: require('../../static/img/undraw_romantic_getaway_re_3f45.svg').default,
    description: (
      <>
        {/* 浪漫之旅 */}
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/undraw_vault_re_s4my.svg').default,
    description: (
      <>
        {/* 总结归纳 */}
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/undraw_complete_task_re_44tb.svg').default,
    description: (
      <>
        {/* 完成目标 */}
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/undraw_design_objectives_re_94pd.svg').default,
    description: (
      <>
        {/* 设计目标 */}
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/undraw_road_sign_re_3kc3.svg').default,
    description: (
      <>
        {/* 选择方向 */}
      </>
    ),
  },
  {
    title: '',
    Svg: require('../../static/img/undraw_lost_re_xqjt.svg').default,
    description: (
      <>
        {/* 失去 */}
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
