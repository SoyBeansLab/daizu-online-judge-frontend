import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Header.module.scss';

// TODO storeと認証実装後
const useIsSignedIn = () => {
  return true;
}

export type HeaderProps = {
  isSignedIn?: boolean;
}

const HeaderPresentation: React.FC<HeaderProps> = ({ isSignedIn }) => {
  return (
    <header className={styles['header-component']}>
      <Link href='/'>
        <a className={styles['heading']}>Daizu Online Judge</a>
      </Link>
      {/* TODO spサイズのときは折りたたみメニューにする */}
      <div className={styles['links']}>
        <Link href='/'>
          <a className={classNames(styles['link'], styles['-red'])}>Home</a>
        </Link>
        <Link href='/contents'>
          <a className={styles['link']}>Contents</a>
        </Link>
        {/* TODO サインイン/アウト用のボタンを作る */}
      </div>
    </header>
  );
}

const HeaderContainer: React.FC = () => {
  const isSignedIn = useIsSignedIn();
  return <HeaderPresentation isSignedIn={isSignedIn} />;
}

export default HeaderContainer;
