import React from 'react'
import { Link } from 'react-router-dom'

import Currency from './common/currency'

const Header = () => {
  return (
    <div className="flex bg-indigo-800 justify-center p-2 text-white font-bold">
      <Currency />
      <div id="brand-name">
        <Link to="/"> BRB INCORPORATED </Link>
      </div>
    </div>
  )
}

export default Header
