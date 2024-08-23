import React from 'react'
import BannerImage from '../assets/2blackbean.jpg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}></div>
        <div className='rightSide'>
            <h1>İletişim</h1>
            <form id='contact-form'>
              <label htmlFor='name'>İsim Soyisim</label>
              <input name='name' placeholder='İsminizi giriniz...' type='text' />
              <label htmlFor='email'>Email</label>
              <input name='email' placeholder='Email giriniz...' type='email' />
              <label htmlFor='message'>Mesajınız</label>
              <textarea name='message' placeholder='Mesajınızı yazınız...'> </textarea>
              <button type='submit'>Mesaj Gönder</button>

            </form>
        </div>
    </div>
  )
}

export default Contact