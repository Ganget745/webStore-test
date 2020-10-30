import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../header'
import { updateAmount } from '../../redux/reducers/basket'
import '../styles/basket.scss'

const Basket = () => {
  const cartItems = useSelector((store) => store.basket.cart)
  const { count, totalPrice } = useSelector((store) => store.basket)
  const currency = useSelector((store) => store.goods.currency)
  const rate = useSelector((store) => store.goods.rates[store.goods.currency])
  const actualPrice = totalPrice * rate
  const dispatch = useDispatch()
  const onClick = (item, ch) => {
    if (ch === '+') {
      return () => dispatch(updateAmount(item.id, '+'))
    }
    return () => dispatch(updateAmount(item.id, '-'))
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="a">
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Артикул</th>
                  <th>Название</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Сумма</th>
                  <th>Удалить</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6">
                    {Object.keys(cartItems).map((item, index) => {
                      return (
                        <td className="flex flex-row border" key={item}>
                          <td className="w-1/10 mx-2 px-2">{index + 1}</td>
                          <img
                            className="product-image object-cover h-12 w-1/10"
                            src={cartItems[item].image}
                            alt={cartItems[item].title}
                          />
                          <td className="product-title w-1/5 mx-3 px-3 justify-center">
                            {cartItems[item].title}
                          </td>
                          <td className="product-price w-1/10 px-4">
                            {(cartItems[item].price * rate).toFixed(2)} {currency}
                          </td>
                          <td className="product_amount w-1/10 mx-4 px-4">
                            {typeof cartItems[item] === 'undefined' ? 0 : cartItems[item].count}
                          </td>
                          <td className="product-total-price w-1/10 mx-10 px-4">
                            {(cartItems[item].count * cartItems[item].price * rate).toFixed(2)}
                            {currency}
                          </td>
                          <td className="flex flex-col">
                            <button
                              type="button"
                              className="product-remove"
                              onClick={onClick(cartItems[item], '-')}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="product-remove"
                              onClick={onClick(cartItems[item], '+')}
                            >
                              +
                            </button>
                          </td>
                        </td>
                      )
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="total-price">
        Total price in basket: {actualPrice.toFixed(2)} {currency}
      </div>
      <div id="total-amount">Total Items in basket: {count}</div>
    </div>
  )
}

export default Basket
