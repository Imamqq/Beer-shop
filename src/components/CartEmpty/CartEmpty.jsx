import React from 'react'

import emptyCart from '../../assets/img/empty-cart.png'
import s from './CartEmpty.module.scss'

const CartEmpty = () => {
    return (
        <div className={s.cart_empty}>
            <h1>Корзина пуста</h1>
            <img src={emptyCart} alt="emptyCart" />
        </div>
    )
}

export default CartEmpty