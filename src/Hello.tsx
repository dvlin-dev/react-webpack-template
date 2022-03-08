import React, { useState } from 'react';
import './index.less';
import logo from '@images/logo.png';
import webpack from './assets/images/webpack.png';

// eslint-disable-next-line func-names
export default function () {
  const [text, useText] = useState('before');
  const loadimport = () => {
    useText('d');
  };
  return (
    <div className="contain">
      <button onClick={loadimport}>hello react</button>
      {text}
      <img src={logo} width="800" alt="logo" />
      <img src={webpack} width="800" alt="webpack" />
    </div>
  );
}
