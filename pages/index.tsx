import React from 'react';
import HeaderContainer from '~/common/Header';
import ExampleContainer from '~/example';

export default function Home() {
  return (
    <div>
      <HeaderContainer />
      Hello Daizu Online Judge!
      <ExampleContainer title='タイトル' description='説明文' />
    </div>
  );
}
