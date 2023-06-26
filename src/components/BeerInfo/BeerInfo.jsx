import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import s from './BeerInfo.module.scss'

import loadingImg from '../../assets/img/loading3.svg'
import { fetchBeers, getBeers } from '../../redux/Slices/ApiSlice'


const BeerInfo = () => {

	const { id } = useParams()
	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.api)

	let info = useSelector(getBeers)

	useEffect(() => {
		dispatch(fetchBeers())
	}, [dispatch])


	return (
		<>
			{
				isLoading
					? (
						<div className={s.loading}>
							<img src={loadingImg} alt="loading" />
						</div>
					)

					: (
						<div className={s.beer_info}>

							<div className={s.left}>
								<img src={info[id].imageUrl} alt="image" />
							</div>

							<div className={s.right}>

								<div className={s.name}>
									<h2>{info[id].name}</h2>
								</div>

								<div className={s.sort}>
									{info[id].sort}
								</div>

								<div className={s.alk}>
									<p>ALC:{info[id].alk}</p>
									<p>OG:{info[id].og}</p>
									<p>IBU:{info[id].ibu}</p>
								</div>

								<div className={s.style}>
									Стиль: <span>{info[id].sort}</span>
								</div>

								<div className={s.title}>
									<p>
										{info[id].title}
									</p>
								</div>

								<div className={s.compound}>
									<p>
										Состав: {info[id].compound}
									</p>
								</div>

								<div className={s.volume_price}>
									<div className={s.volume}>{info[id].volume}</div>
									<div className={s.price}>
										<h1>{info[id].price} RUB</h1>
									</div>
								</div>

								<div className={s.addCart}>
									<div className={s.addCart_left}>
										<button className={s.minus}>-</button>
										<div className={s.quantity}>1</div>
										<button className={s.plus} >+</button>
									</div>

									<div className={s.addCart_right}>
										ДОБАВИТЬ В КОШЕЛЁК
									</div>
								</div>

							</div>
						</div>
					)
			}
		</>
	)

}

export default BeerInfo