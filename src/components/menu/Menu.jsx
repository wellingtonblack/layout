import React from 'react';
import menu from "./departments"
import "./menu.scss"

const  isMobile = window.innerWidth > 992
const Menu = () => {
  return(
      <>
        {isMobile && <div className='container menu'>
          <ul className='list-menu'>
            {menu.map((item, index) => {
              return(
              
                <li key={index}>
                  {item.icon &&  <img src={item.icon} alt={item.department} />}
                  <span>{item.department}</span>
                </li>            
              )
            })}
          </ul>
        </div>}
      </>

  )
}
export default Menu

