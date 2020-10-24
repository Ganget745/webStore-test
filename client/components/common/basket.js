import React from 'react'

const Basket = () => {
  return (
    <div>
      <div className="product_image">image</div>
      <div className="product_title">title</div>
      <div className="product_price">price</div>
      <div className="product_amount">amount</div>
      <div className="product_total_price">total-price</div>
      <button type="button" className="product_remove">
        -
      </button>
      <div id="total-amount">tatal amount</div>
    </div>
  )
}

export default Basket
