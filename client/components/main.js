import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import Card from './common/card'
import Currency from './common/currency'
import Sort from './common/sort'
import OrderCount from './common/order-count'
import { getGoods } from '../redux/reducers/goods'

const Main = () => {
  const listOfGoods = useSelector((store) => store.goods.listOfGoods)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGoods())
    return () => {}
  }, [])
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Currency />
      <Sort />
      <OrderCount />
      <div className="flex flex-wrap">
        {listOfGoods.map((item) => {
          return (
            <div key={item.id} className="m-2">
              <Card data={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
