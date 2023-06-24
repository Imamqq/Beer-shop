import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import s from "./Header.module.scss"

import logo from "../../assets/img/logo.png"
import vector from "../../assets/img/Vector.png"
import cart2 from "../../assets/img/cart2.svg"
import fullCart from "../../assets/img/fullCart.svg"

const Header = () => {

    const { items } = useSelector(state => state.cart)

    return (
        <div className={s.header}>
            <div className={s.nav}>
                <div className={s.left_nav}>
                    <NavLink className={({ isActive }) => `${s.hover} ${isActive ? s.active : ""}`} to='/shop'>Пиво</NavLink>
                    <NavLink className={({ isActive }) => `${s.hover} ${isActive ? s.active : ""}`} to='/'>Правила игры</NavLink>
                    <NavLink className={({ isActive }) => `${s.hover} ${isActive ? s.active : ""}`} to='/'>сувениры</NavLink>
                    <NavLink className={({ isActive }) => `${s.hover} ${isActive ? s.active : ""}`} to='/'>Оплата и доставка</NavLink>
                </div>

                <NavLink to='/'>
                    <div className={s.logo}>
                        <img src={logo} alt="Logo" />
                    </div>
                </NavLink>

                <div className={s.right_nav}>
                    <NavLink className={({ isActive }) => `${s.hover} ${isActive ? s.active : ""}`} to='/'>Про броварню</NavLink>
                    <NavLink className={({ isActive }) => `${s.hover} ${isActive ? s.active : ""}`} to='/'>краудфандинг</NavLink>
                    <NavLink className={({ isActive }) => `${s.hover} ${isActive ? s.active : ""}`} to='/'>контакты</NavLink>
                    <div>
                        <NavLink to='/'>eng</NavLink>
                        <img src={vector} alt="vector" />
                    </div>
                    <NavLink className={s.cart} to='/cart'>
                        {!items.length
                            ? <img src={cart2} alt="cart" />
                            : <img src={fullCart} alt="cart" />
                        }
                        {!!items.length && (
                            <span className={s.count}>{items.length}</span>
                        )}
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header