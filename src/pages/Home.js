import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/banner.jpg";


function Home() {
    return (
      <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
          <h1>Burger 04</h1>
          <p> Özel Baharat Karışımlı<br/>  Nefis Hamburgerler </p>
          <Link to="/menu">
          <button>Sipariş İçin Tıkla</button>
          </Link>
        </div>
      </div>
    )
  }
  
  export default Home