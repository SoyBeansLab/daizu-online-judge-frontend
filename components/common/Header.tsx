import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { useIsSP } from 'utils/useIsSP';

// TODO storeと認証実装後
const useIsSignedIn = () => {
  return true;
}

export type HeaderProps = {
  isSignedIn?: boolean;
}

const HeaderPresentation: React.FC<HeaderProps> = ({ isSignedIn }) => {
  const isSP = useIsSP();
  return (
    <header className={styles['header-component']}>
      <Link href='/'>
        <img className={styles['logo']} src='/images/daizu-logo.svg' alt='logo' />
      </Link>
      {/* TODO spサイズのときは折りたたみメニューにする */}
      {!isSP && (
        <div className={styles['links']}>
          <Link href='/'>
            <a className={classNames(styles['link'], styles['-red'])}>Home</a>
          </Link>
          <Link href='/contents'>
            <a className={styles['link']}>Contents</a>
          </Link>
          {/* TODO サインイン/アウト用のボタンを作る */}
        </div>
      )}
    </header>
  );
}

const HeaderContainer: React.FC = () => {
  const isSignedIn = useIsSignedIn();
  return <HeaderPresentation isSignedIn={isSignedIn} />;
}

export default HeaderContainer;
