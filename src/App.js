import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'></div>
      <div className='footer'>
        <div>
          Icons made by{' '}
          <a
            href='https://www.flaticon.com/authors/smashicons'
            title='Smashicons'
          >
            Smashicons
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
