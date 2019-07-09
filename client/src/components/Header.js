import React from 'react';
import eye from '../assets/images/eye.png';
import banana from '../assets/images/eye-glow.png';


function Header() {
  return <header>
    <nav id="topHover">
      <a href="index.html">
        <img src={eye} alt="The Eye" id="eye"/>
        <img src={banana} alt="The Eye" id="banana"/>
      </a>
      <ul id="topNav">
        <li><a id="newsTop" href="pages/news.html">News</a></li>
        <li><a id="archTop" href="pages/archive.html">Archive</a></li>
        <li><a id="shopTop" href="pages/shop.html">Shop</a></li>
        <li><a id="aboutTop" href="pages/about.html">About</a></li>
        <li><a id="creTop" href="pages/creators.html">Creators</a></li>
        <li><a id="conTop" href="pages/contact.html">Contact</a></li>
      </ul>
    </nav>
    <div id="logo">
        <h1>OTOXA</h1>
        <h2>Eye of the Universe</h2>
    </div>
   </header>
}

export default Header;
