import React from 'react';
import "./newsletter.scss"

const Newsletter = () => {
  return(
    <div className='container newsletter'>
       <div className='content'>
          <h4 className='title'>Recebe Nossa Newsletter</h4>
          <div className='field'>
              <input type="text" placeholder='Digite seu e-mail'/>
              <button className='btn button-send'>Enviar</button>
          </div>
       </div>
    </div>
  ) 
}

export default Newsletter