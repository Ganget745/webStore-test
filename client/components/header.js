import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex bg-indigo-800 justify-center p-2 text-white font-bold">
      <div id="brand-name">
        <Link to="/"> BRB INCORPORATED </Link>
      </div>
    </div>
  )
}

export default Header
