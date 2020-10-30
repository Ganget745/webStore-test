import React from 'react'
import { useDispatch } from 'react-redux'

import { setSort } from '../../redux/reducers/goods'
import '../styles/sort.scss'

const Sort = () => {
  const dispatch = useDispatch()
  // const positive = '▲'
  // const negative = '▼'
  return (
    <div className="sorting">
      <div className="choose-sort"> sort by:</div>
      <button
        id="sort-price"
        type="button"
        className="sort price"
        onClick={() => dispatch(setSort('positive'))}
      >
        price
      </button>
      <button
        id="sort-name"
        type="button"
        className="sort alphabet"
        onClick={() => dispatch(setSort('positive'))}
      >
        alphabet
      </button>
    </div>
  )
}

export default Sort
