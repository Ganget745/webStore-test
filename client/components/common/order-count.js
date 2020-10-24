import React from 'react'
import { Link } from 'react-router-dom'

const OrderCount = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col">
        <div className="my-1 text-m text-gray-700 font-medium" href="#">
          Total items in cart: XXX
        </div>
      </div>

      <div className="flex justify-center">
        <Link id="order-count" className="relative text-gray-700 hover:text-gary-600" to="/basket">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="curentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1" />
        </Link>
      </div>
    </div>
  )
}

export default OrderCount
