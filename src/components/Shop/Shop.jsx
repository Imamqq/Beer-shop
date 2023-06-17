import React from 'react'

import s from "./Shop.module.scss"
import BeerCard from '../BeerCard/BeerCard'

const Shop = ({ items }) => {

    return (
        <div className={s.shop}>
            <h1>ПИВО</h1>

            <div className={s.items}>
                {
                    items.map(obj => <BeerCard key={obj.id} {...obj} />)
                }
            </div>
        </div>
    )
}

export default Shop