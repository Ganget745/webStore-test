import React from 'react'
import { useSelector } from 'react-redux'

import Header from '../header'

const Basket = () => {
  const cartItems = useSelector((store) => store.basket.cart)
  const { count, totalPrice } = useSelector((store) => store.basket)
  const currency = useSelector((store) => store.goods.currency)
  const rate = useSelector((store) => store.goods.rates[store.goods.currency])
  const actualPrice = totalPrice * rate
  return (
    <div>
      <Header />
      <div>
        {Object.keys(cartItems).map((item) => {
          return (
            <div key={item}>
              <img
                className="product_image"
                src={cartItems[item].image}
                alt={cartItems[item].title}
              />
              <div className="product_title">{cartItems[item].title}</div>
              <div className="product_price">
                {(cartItems[item].price * rate).toFixed(2)} {currency}
              </div>
              <div className="product_amount">
                Item in basket: {typeof cartItems[item] === 'undefined' ? 0 : cartItems[item].count}
              </div>
              <div className="product_total_price">
                Total price this Item in basket:
                {(cartItems[item].count * cartItems[item].price * rate).toFixed(2)} {currency}
              </div>
            </div>
          )
        })}
      </div>

      <button type="button" className="product_remove">
        -
      </button>
      <div id="total-price">
        Total price in basket: {actualPrice.toFixed(2)} {currency}
      </div>
      <div id="total-amount">Total Items in basket: {count}</div>
    </div>
  )
}

export default Basket
