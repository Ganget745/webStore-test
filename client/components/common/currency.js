import React from 'react'

import '../styles/currency.scss'

const Currency = () => {
  return (
    <div>
      <button type="button" className="button usd" id="usd-button">
        USD
      </button>
      <button type="button" className="button eur" id="eur-button">
        EUR
      </button>
      <button type="button" className="button cad" id="cad-button">
        CAD
      </button>
    </div>
  )
}

export default Currency
