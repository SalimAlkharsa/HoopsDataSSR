import React from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='App'>
        <Navbar />
      <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
