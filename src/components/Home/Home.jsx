import React from 'react'
import { NavLink } from 'react-router-dom'

import s from "./Home.module.scss"

import beer from "../../assets/img/x-beer.png"
import inst from "../../assets/img/instagram-icon.png"
import botlle from "../../assets/img/untappd-icon.png"
import facebook from "../../assets/img/facebook-icon.png"


const Home = () => {
    return (
        <div className={s.home}>
            <div></div>
            <div className={s.home_center}>
                <div><img src={beer} alt="beer" /></div>
                <NavLink to="/shop" className={s.title}>магазин</NavLink>
            </div>

            <div className={s.home_right}>
                <NavLink to='/'><img src={inst} alt="inst" /></NavLink>
                <NavLink to='/'><img src={botlle} alt="botlle" /></NavLink>
                <NavLink to='/'><img src={facebook} alt="facebook" /></NavLink>
            </div>
        </div>
    )
}

export default Home