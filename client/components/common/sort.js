import React from 'react'

import '../styles/sort.scss'

const Sort = (props) => {
  const clickAction = () => {
    props.card.sort()
  }
  return (
    <div className="sorting">
      <button id="sort-price" type="button" className="sort price" onClick={clickAction}>
        price
      </button>
      <button id="sort-name" type="button" className="sort alphabet" onClick={clickAction}>
        alphabet
      </button>
    </div>
  )
}

export default Sort
