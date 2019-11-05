import React from 'react';
import logo from '../../assets/img/wecare-1.png';
import './Home.css';

function Home() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <strong className='App-logo-text'>WeCare</strong>
        <br />
        <strong>Your health matters!</strong>
      </header>
    </div>
  );
}

export default Home;
