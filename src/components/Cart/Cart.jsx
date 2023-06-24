import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartEmpty from '../CartEmpty/CartEmpty'

import s from './Cart.module.scss'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const { items, totalPrice } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    if (!totalPrice) {
        return <CartEmpty />
    }

    return (
        <div className={s.cart}>
            <h1>КОРЗИНА</h1>

            <div className={s.cart_item}>
                {
                    items.map(item => <CartItem key={item.id} {...item} />)
                }
            </div>

            <div className={s.totalPrice}>
                <h2>Сумма заказа: <span>{totalPrice} RUB</span></h2>
                <button>Оформить заказ</button>
            </div>
        </div>
    )
}

export default Cart