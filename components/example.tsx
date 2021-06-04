import React from 'react';
import styles from './example.module.scss';

export type ExampleProps = {
  title: string;
  description: string;
};

const ExamplePresentation: React.VFC<ExampleProps> = ({ title, description }) => {
  return (
    <div className={styles['example-component']}>
      <h2 className={styles['title']}>{title}</h2>
      <p className={styles['description']}>{description}</p>
    </div>
  );
};

const ExampleContainer: React.FC<ExampleProps> = (props) => {
  return <ExamplePresentation {...props} />;
};

export default ExampleContainer;
