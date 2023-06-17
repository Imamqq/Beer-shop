import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './BeerCard.module.scss'

import cart2 from "../../assets/img/cart2.svg"


const BeerCard = ({ id, imageUrl, name, sort, volume, alk, og, ibu, price }) => {
    return (

        <div className={s.beer_card}>
            <NavLink to={`/beerInfo/${id}`}>
                <div className={s.div_image}>
                    <img className={s.image} src={imageUrl} alt="photo" />
                </div>

                <div className={s.name}><p>{name}</p></div>

                <div className={s.sort_volume}>
                    <p>{sort}</p>
                    <p>{volume}</p>
                </div>

                <div className={s.compound}>
                    <p>ALC:{alk}</p>
                    <p>OG:{og}</p>
                    <p>IBU:{ibu}</p>
                </div>

            </NavLink>
            <div className={s.price}>
                <p>{price} RUB</p>

                <img src={cart2} alt="cart" />
            </div>
        </div>
    )
}

export default BeerCard