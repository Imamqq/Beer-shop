import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import s from "./Shop.module.scss"
import loadingImg from "../../assets/img/loading3.svg"
import BeerCard from '../BeerCard/BeerCard'
import { fetchBeers, getBeers, isLoading } from '../../redux/Slices/ApiSlice'


const Shop = () => {

    let [beers, setBeers] = useState([])

    // const { imam } = useSelector(state => state.api)
    // console.log(imam)

    beers = useSelector(getBeers)
    let loading = useSelector(isLoading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBeers())
        setBeers(beers)
    }, [dispatch])

    return (
        <div className={s.shop}>
            <h1>ПИВО</h1>

            {loading
                ? (
                    <div className={s.loading}>
                        <img src={loadingImg} alt="loading" />
                    </div>
                )
                : (
                    <div className={s.items}>
                        {
                            beers.map(obj => <BeerCard key={obj.id} {...obj} />)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Shop