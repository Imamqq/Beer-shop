import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Header.scss"

import logo from "../../assets/img/logo.png"
import vector from "../../assets/img/Vector.png"
import cart2 from "../../assets/img/cart2.svg"

const Header = () => {
    return (
        <div className='header'>
            <div className='nav'>
                <div className='left-nav'>
                    <NavLink to='/'>Пиво</NavLink>
                    <NavLink to='/'>Правила игры</NavLink>
                    <NavLink to='/'>сувениры</NavLink>
                    <NavLink to='/'>Оплата и доставка</NavLink>
                </div>

                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>

                <div className='right-nav'>
                    <NavLink to='/'>Про броварню</NavLink>
                    <NavLink to='/'>краудфандинг</NavLink>
                    <NavLink to='/'>контакты</NavLink>
                    <div>
                        <NavLink to='/'>eng</NavLink>
                        <img src={vector} alt="vector" />
                    </div>
                    <NavLink to='/'><img className="cart" src={cart2} alt="cart" /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header