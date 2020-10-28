const ADD_TO_BASKET = 'ADD_TO_BASKET'

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
