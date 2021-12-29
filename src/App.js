import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
  Navbar,
  Homepage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
} from './components';
import './App.css';
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />}></Route>
              <Route exact path='/news' element={<News />}></Route>
              <Route
                exact
                path='/cryptocurrencies'
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path='/crypto/:coinId'
                element={<CryptoDetails />}
              ></Route>
              <Route exact path='/exchanges' element={<Exchanges />}></Route>
            </Routes>
          </div>
        </Layout>
      
      <div className='footer'>
      <Typography.Title level={5} style={{color:'white', textAlign: 'center'}}>
        Crypto Owl <br />
        © 2022 Karolis Pigaga
      </Typography.Title>
      <Space>
        <Link to=''>Home</Link>
        <Link to='/news'>News</Link>
        <Link to='/exchanges'>Exchanges</Link>
      </Space>
      <Space>
        <a href='https://github.com/Karalito/Crypto-currency-web' target="_blank" rel='noreferrer'>Github</a>
        <a href='https://www.linkedin.com/in/karolis-pigaga-a4989920a/ ' target="_blank" rel='noreferrer'>Linkendin</a>
      </Space>
      </div>
      </div>
    </div>
  );
};

export default App;
