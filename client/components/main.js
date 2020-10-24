import React from 'react'

import Head from './head'
import Header from './header'
import Card from './common/card'
import Currency from './common/currency'
import Sort from './common/sort'
import OrderCount from './common/order-count'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <Header />
      <Card />
      <Currency />
      <Sort />
      <OrderCount />
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
