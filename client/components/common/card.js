import React from 'react'

import '../styles/card.scss'

const Card = () => {
  return (
    <div className="product-item">
      <div className="card_image">тут картинка</div>
      <div className="card_title">
        <h3>Маленькое черное платье</h3>
        <div className="currency">EUR</div>
        <span className="card_price">1999</span>
        <div className="actions">
          <div className="add-to-card">
            <button type="button" className="card-button">
              add to basket
            </button>
          </div>
          <div className="card_product-amount">тут сколько в корзине</div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)

/* <div className="card">
      <div className="card_image">card_image</div>
      <div className="card_price">card_price</div>
      <div className="currency">currency</div>
      <div className="card_product-amount">card_product-amount</div>
      <div className="card_title">card_title</div>
      <button type="button">Add</button>
    </div> */
