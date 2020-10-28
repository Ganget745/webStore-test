import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket } from '../../redux/reducers/basket'

import '../styles/card.scss'

const Card = (props) => {
  const { data } = props
  const currency = useSelector((store) => store.goods.currency)
  const rate = useSelector((store) => store.goods.rates[store.goods.currency])
  const actualPrice = data.price * rate
  const dispatch = useDispatch()
  const amount = useSelector((store) => store.basket.cart[data.id])
  return (
    <div className="flex flex-col card max-w-xs rounded overflow-hidden shadow-lg">
      <img className="card__image w-full object-cover h-40" src={data.image} alt={data.title} />
      <div className="px-6 py-4">
        <div className="card__title font-bold text-xl mb-2">{data.title}</div>
        <div className="flex justify-evenly">
          <div className="card__price text-gray-700 text-base">{actualPrice.toFixed(2)}</div>
          <div className="currency text-gray-700 text-base">{currency}</div>
        </div>
        <div className="card__product-amount text-gray-700 text-base">
          in cart: {typeof amount === 'undefined' ? 0 : amount.count}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button type="button" className="add-button" onClick={() => dispatch(addToBasket(data))}>
          Add
        </button>
      </div>
    </div>
  )
}

export default Card
