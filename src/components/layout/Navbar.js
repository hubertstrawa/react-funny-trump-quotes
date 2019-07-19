import React from 'react';
import Trump from '../../assets/three.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Trump} style={{ height: '15rem' }} />
      <h1>Funny & Ridiculous Quotes...</h1>
    </div>
  );
};

export default Navbar;
