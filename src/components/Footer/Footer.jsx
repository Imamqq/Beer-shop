import React from 'react'
import { NavLink } from 'react-router-dom'

import s from "./Footer.module.scss"

import inst from "../../assets/img/instagram-icon.png"
import botlle from "../../assets/img/untappd-icon.png"
import facebook from "../../assets/img/facebook-icon.png"
import visa from "../../assets/img/visa.png"

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.nav}>
                <NavLink to='/'>Пиво</NavLink>
                <NavLink to='/'>Правила игры</NavLink>
                <NavLink to='/'>сувениры</NavLink>
                <NavLink to='/'>Оплата и доставка</NavLink>
                <NavLink to='/'>Про броварню</NavLink>
                <NavLink to='/'>краудфандинг</NavLink>
                <NavLink to='/'>контакты</NavLink>
            </div>

            <div className={s.telephon}>
                <div>+380 (96) 917-30-32</div>
                <div className={s.links}>
                    <NavLink to='/'><img src={inst} alt="inst" /></NavLink>
                    <NavLink to='/'><img src={botlle} alt="botlle" /></NavLink>
                    <NavLink to='/'><img src={facebook} alt="facebook" /></NavLink>
                </div>
            </div>
            <div>
                <img src={visa} alt="visa" />
            </div>
        </div>
    )
}

export default Footer