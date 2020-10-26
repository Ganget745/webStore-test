import React from 'react'
import { useDispatch } from 'react-redux'

import { setCurrency } from '../../redux/reducers/goods'
import '../styles/currency.scss'

const Currency = () => {
  const dispatch = useDispatch()
  const currencyClick = (currency) => {
    return dispatch(setCurrency(currency))
  }

  return (
    <div>
      <button
        type="button"
        className="button usd"
        id="usd-button"
        onClick={() => currencyClick('USD')}
      >
        USD
      </button>
      <button
        type="button"
        className="button eur"
        id="eur-button"
        onClick={() => currencyClick('EUR')}
      >
        EUR
      </button>
      <button
        type="button"
        className="button cad"
        id="cad-button"
        onClick={() => currencyClick('CAD')}
      >
        CAD
      </button>
    </div>
  )
}

export default Currency
