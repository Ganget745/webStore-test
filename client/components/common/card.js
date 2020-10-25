import React from 'react'

import '../styles/card.scss'

const Card = (props) => {
  const { data } = props
  return (
    <div className="flex flex-col card max-w-xs rounded overflow-hidden shadow-lg">
      <img className="card__image w-full object-cover h-40" src={data.image} alt="product" />
      <div className="px-6 py-4">
        <div className="card__title font-bold text-xl mb-2">{data.title}</div>
        <div className="flex justify-evenly">
  <div className="card__price text-gray-700 text-base">{data.price}</div>
  <div className="currency text-gray-700 text-base">currency</div>
        </div>
        <div className="card__product-amount text-gray-700 text-base">in cart:</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button type="button" className="add-button">
          Add
        </button>
      </div>
    </div>
  )
}

export default Card

/* <div className="card">
      <div className="card_image">card_image</div>
      <div className="card_price">card_price</div>
      <div className="currency">currency</div>
      <div className="card_product-amount">card_product-amount</div>
      <div className="card_title">card_title</div>
      <button type="button">Add</button>
    </div> */
