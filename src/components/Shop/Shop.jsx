import React from 'react'
import { NavLink } from 'react-router-dom'

import s from "./Shop.module.scss"
import BeerCard from '../BeerCard/BeerCard'

const Shop = ({ items }) => {

    return (
        <div className={s.shop}>
            <h1>ПИВО</h1>

            <div className={s.items}>
                {
                    items.map(obj =>
                        <NavLink to={`/beerCard/${obj.id}`}>
                            <BeerCard key={obj.id} {...obj} />
                        </NavLink>)
                }
            </div>
        </div>
    )
}

export default Shop