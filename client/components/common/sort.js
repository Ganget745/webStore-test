import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSort } from '../../redux/reducers/goods'
import { setSortCart } from '../../redux/reducers/basket'
import '../styles/sort.scss'

const Sort = () => {
  const [toggled, setToggled] = useState(true)
  const [sortMethod, setSortMethod] = useState('')
  const [activeSort, setActiveSort] = useState('')
  const dispatch = useDispatch()
  const clickAction = (sortType) => {
    return () => {
      setToggled(!toggled)
      setSortMethod(toggled ? '▲' : '▼')
      setActiveSort(sortType)
      dispatch(setSort(sortType, toggled))
      dispatch(setSortCart(sortType, toggled))
    }
  }
  return (
    <div className="sorting">
      <div className="choose-sort"> sort by:</div>
      <button id="sort-price" type="button" className="sort price" onClick={clickAction('price')}>
        price {activeSort === 'price' && sortMethod}
      </button>
      <button id="sort-name" type="button" className="sort alphabet" onClick={clickAction('abc')}>
        alphabet {activeSort === 'abc' && sortMethod}
      </button>
    </div>
  )
}

export default Sort
