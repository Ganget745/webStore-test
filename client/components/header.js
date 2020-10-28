import React from 'react'
import { Link } from 'react-router-dom'

import Currency from './common/currency'
import Sort from './common/sort'
import OrderCount from './common/order-count'
import './styles/header.scss'

const Header = () => {
  return (
    <div className="flex bg-indigo-800 justify-center text-white font-bold">
      <div id="brand-name">
        <Link to="/"> BRB INCORPORATED </Link>
      </div>
      <div className="bot-header">
        <Sort />
        <div className="look-currency">
          <Currency />
        </div>
        <div className="order-count">
          <OrderCount />
        </div>
      </div>
    </div>
  )
}

export default Header
