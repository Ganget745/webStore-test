import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Header from '../header'
import { updateAmount } from '../../redux/reducers/basket'
import '../styles/basket.scss'

const Basket = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.basket.cart)
  const { totalPrice, totalAmount } = useSelector((store) => store.basket)
  const currency = useSelector((s) => s.goods.currency)
  const rate = useSelector((s) => s.goods.rates[s.goods.currency])
  const actualPrice = totalPrice * rate

  useEffect(() => {
    axios({
      method: 'post',
      url: '/api/v1/logs',
      data: {
        time: +new Date(),
        action: `navigate to ${window.location.pathname} page`
      }
    }).catch((err) => console.log(err))
    return () => {}
  }, [])
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
                    {cartItems.map((item, index) => {
                      return (
                        <td className="flex flex-row border" key={item.id}>
                          <td className="w-1/10 mx-2 px-2">{index + 1}</td>
                          <img
                            className="product-image object-cover h-12 w-1/10"
                            src={item.image}
                            alt={item.title}
                          />
                          <td className="product-title w-1/5 mx-3 px-3 justify-center">
                            {item.title}
                          </td>
                          <td className="product-price w-1/10 px-4">
                            {(item.price * rate).toFixed(2)} {currency}
                          </td>
                          <td className="product_amount w-1/10 mx-4 px-4">
                            {typeof item === 'undefined' ? 0 : item.count}
                          </td>
                          <td className="product-total-price w-1/10 mx-10 px-4">
                            {(item.price * item.count * rate).toFixed(2)}
                            {currency}
                          </td>
                          <td className="flex flex-col">
                            <button
                              type="button"
                              className="product-remove"
                              onClick={() => dispatch(updateAmount(item, '-'))}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              className="product-remove"
                              onClick={() => dispatch(updateAmount(item, '+'))}
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
      <div id="total-amount">Total Items in basket: {totalAmount}</div>
    </div>
  )
}

Basket.propTypes = {}

export default Basket
