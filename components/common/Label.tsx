import React from 'react';
import classNames from 'classnames';
import styles from './Label.module.scss';

export type LabelProps = {
  label: string;
  color?: 'red' | 'brown' | 'black';
};

const LabelPresentation: React.VFC<LabelProps> = ({ label, color = 'red' }) => {
  return (
    <div className={classNames(styles['label-component'], styles[`-${color}`])}>
      <p className={styles['label']}>{label}</p>
    </div>
  );
}

const LabelContainer: React.VFC<LabelProps> = (props) => {
  return <LabelPresentation {...props} />;
}

export default LabelContainer;
