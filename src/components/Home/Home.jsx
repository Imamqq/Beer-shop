import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Home.scss"

import beer from "../../assets/img/x-beer.png"
import inst from "../../assets/img/instagram-icon.png"
import botlle from "../../assets/img/untappd-icon.png"
import facebook from "../../assets/img/facebook-icon.png"


const Home = () => {
    return (
        <div className='home'>
            <div></div>
            <div className="home-center">
                <div><img src={beer} alt="beer" /></div>
                <NavLink className='title'>магазин</NavLink>
            </div>

            <div className="home-right">
                <NavLink to='/'><img src={inst} alt="inst" /></NavLink>
                <NavLink to='/'><img src={botlle} alt="botlle" /></NavLink>
                <NavLink to='/'><img src={facebook} alt="facebook" /></NavLink>
            </div>
        </div>
    )
}

export default Home