import React from 'react'
import {Link } from 'react-router-dom'



import mira from '../../assets/mira.jpg'
import {FiLogOut} from 'react-icons/fi';

function Nav() {
    return (
    <nav className ="nav__bar">

        <ul className ="nav__Links">

            <Link to="/Home">Home</Link>
            <Link to="/Catalog">Catalog</Link>
            <Link to="/Study">Study</Link>
            <Link to="/Performance">Performance</Link>
            <Link to ="/Me">Me</Link>

        
        </ul>
        <div className="user__info">
            <img className ="user__img"src={mira} alt="" />
            <div className="login">
                <FiLogOut className="login__icon"/>
            </div>
        </div>
  </nav>
          
       

    )
}

export default Nav
