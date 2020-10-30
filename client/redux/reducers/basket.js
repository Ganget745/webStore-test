const ADD_TO_BASKET = 'ADD_TO_BASKET'
const UPDATE_AMOUNT = 'UPDATE_AMOUNT'

const initialState = {
  cart: {},
  totalPrice: 0,
  count: 0
}

const setCount = (product) => {
  if (typeof product !== 'undefined') {
    const count = product.count + 1
    return count
  }
  return 1
}

const sumOfItems = (cart) => {
  if (typeof cart !== 'undefined') {
    return Object.keys(cart).reduce((acc, rec) => acc + cart[rec].count, 0)
  }
  return 0
}

const globalCountPrice = (cart) => {
  const count = Object.keys(cart).reduce((acc, rec) => acc + cart[rec].count, 0)
  const totalPrice = Object.keys(cart).reduce(
    (acc, rec) => acc + cart[rec].price * cart[rec].count,
    0
  )
  return { count, totalPrice }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.item.id]: {
            ...action.item,
            count: setCount(state.cart[action.item.id])
          }
        },
        totalPrice: state.totalPrice + action.item.price,
        count: sumOfItems(state.cart) + 1
      }
    }
    case UPDATE_AMOUNT: {
      const newAmount = state.cart[action.id].count + action.payload
      const updatedCart = Object.keys(state.cart).reduce((acc, rec) => {
        if (rec !== action.id) {
          return { ...acc, [rec]: state.cart[rec] }
        }
        return { ...acc }
      }, {})
      if (newAmount <= 0) {
        return {
          ...state,
          cart: updatedCart,
          ...globalCountPrice(updatedCart)
        }
      }
      const updatedState = {
        ...state,
        cart: {
          ...state.cart,
          [action.id]: {
            ...state.cart[action.id],
            count: newAmount
          }
        }
      }
      return {
        ...updatedState,
        ...globalCountPrice(updatedState.cart)
      }
    }
    default:
      return state
  }
}

export function addToBasket(item) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_BASKET,
      item
    })
  }
}

export function updateAmount(id, change) {
  let payload = 0
  if (change === '+') {
    payload = 1
  }
  if (change === '-') {
    payload = -1
  }
  return {
    type: UPDATE_AMOUNT,
    id,
    payload
  }
}
