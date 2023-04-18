import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy-to-Understand Content',
    Svg: require('@site/static/img/undraw_Easy_to_Understand_Content.svg').default,
    description: (
      <>
        Learn complex data science concepts in a simple and easy-to-understand language that anyone can follow,
        regardless of their technical background or experience.
      </>
    ),
  },
  {
    title: 'Structured Learning Pathways',
    Svg: require('@site/static/img/undraw_Structured_Learning_Pathways.svg').default,
    description: (
      <>
      Follow a structured learning pathway that takes you from beginner to advanced in a clear and organized way,
       ensuring you cover all the essential topics along the way.
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  {
    title: 'DIY Examples and Exercises',
    Svg: require('@site/static/img/undraw_Interactive_Examples_and_Exercises.svg').default,
    description: (
      <>
        Gain hands-on experience with DIY examples and exercises that allow you to 
        apply your knowledge in real-world scenarios.
      </>
    ),
  },

];

const FeatureList2 = [
  {
    title: 'Self-Paced Learning',
    Svg: require('@site/static/img/undraw_Self_Paced_Learning.svg').default,
    description: (
      <>
        Learn at your own pace that allow you to study whenever and wherever you want, 
        without the pressure of strict deadlines or schedules.
      </>
    ),
  },
  {
    title: 'Expert Tutor Support',
    Svg: require('@site/static/img/undraw_Expert_Tutor_Support.svg').default,
    description: (
      <>
        Get personalized support from an expert who can answer your questions, provide feedback, 
        and help you overcome any challenges you encounter along the way.
      </>
    ),
  },
  {
    title: 'Engaging and Visual Content',
    Svg: require('@site/static/img/undraw_Engaging_and_Visual Content.svg').default,
    description: (
      <>
        Enjoy engaging and visual content that helps you stay focused and motivated as you learn, 
        with clear diagram and real-world examples.
      </>
    ),
  },
]

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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

    <div>
      <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList2.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>

    </div>
  );
}

