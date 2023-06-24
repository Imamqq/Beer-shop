import React from 'react'

import s from './CartItem.module.scss'

import remove from '../../assets/img/remove.svg'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../redux/Slices/CartSlice'

const CartItem = ({ id, name, count, sort, imageUrl, alk, og, ibu, volume, price }) => {

    const dispatch = useDispatch()

    const plusCount = () => {
        dispatch(addItem({ id, price, count }))
    }

    const minusCount = () => {
        dispatch(minusItem({ id, price, count }))
    }

    const removeBeer = () => {
        dispatch(removeItem({ id, price, count }))
    }

    return (
        <div className={s.cartItem}>
            <img className={s.image} src={imageUrl} alt="image" />

            <div className={s.opisanie}>
                <div className={s.name}>{name}</div>
                <div className={s.sort}>{sort}</div>
                <div className={s.compound}>
                    <p>ALC:{alk}</p>
                    <p>OG:{og}</p>
                    <p>IBU:{ibu}</p>
                </div>
            </div>

            <div className={s.volue_price}>
                <div>{volume}</div>
                <div className={s.price}>{price} RUB</div>
            </div>

            <div className={s.count}>
                <button className={s.minus} onClick={minusCount}>-</button>
                <div className={s.quantity}>{count}</div>
                <button className={s.plus} onClick={plusCount}>+</button>
            </div>

            <div className={s.remove}>
                <img src={remove} onClick={removeBeer} alt="remove" />
            </div>
        </div>
    )
}

export default CartItem