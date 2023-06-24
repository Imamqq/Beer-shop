import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import s from './BeerCard.module.scss'

import cart2 from "../../assets/img/cart2.svg"
import fullCartImg from "../../assets/img/fullCart.svg"
import { addItem } from '../../redux/Slices/CartSlice'


const BeerCard = ({ id, imageUrl, name, sort, volume, alk, og, ibu, price, count }) => {

    const dispatch = useDispatch()

    const [isAdd, setIsAdd] = useState(false)

    const addClick = () => {
        dispatch(addItem({ id, imageUrl, name, sort, volume, alk, og, ibu, price, count }))
        setIsAdd(true)
    }

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
                <img onClick={addClick} src={isAdd ? fullCartImg : cart2} alt="cart" />
            </div>
        </div>
    )
}

export default BeerCard