import React from 'react';
import LabelContainer from '~/common/Label';
import styles from './index.module.scss';

const Index: React.VFC = () => {
  return (
    <div className={styles['index-page']}>
      <img className={styles['icon']} src='/images/soy-da-.png' alt='icon' />
      <h1 className={styles['title']}>Welcome to Daizu Online Judge!</h1>
      <p className={styles['subtitle']}>By ICT Committee</p>
      <LabelContainer label="開催中" color="brown" />
    </div>
  );
}

export default Index;
