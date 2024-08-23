import React from 'react'
import BannerImage from '../assets/1beef.jpg'
function About() {
  return (
    <div className='about'>
      <div className='aboutTop'style={{backgroundImage: `url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Biz, burger yapımını bir sanat olarak gören ve her ısırıkta bu sanatı sizlerle paylaşmayı amaçlayan bir ekibiz. Kurulduğumuz günden bu yana, en kaliteli malzemeleri kullanarak hazırladığımız özel tariflerimizle damaklarınızda unutulmaz tatlar bırakıyoruz.

 Afiyet olsun!</p>
      </div>
    </div>
  )
}

export default About