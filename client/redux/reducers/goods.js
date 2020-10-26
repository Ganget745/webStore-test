import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const SET_CURRENCY = 'SET_CURRENCY'

const initialState = {
  listOfGoods: [],
  currency: 'USD'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return {
        ...state,
        listOfGoods: action.data
      }
    }
    case SET_CURRENCY: {
      return {
        ...state,
        currency: action.data
      }
    }
    default:
      return state
  }
}

export function getGoods() {
  return (dispatch) => {
    axios('/api/v1/goods').then(({ data }) => {
      dispatch({ type: GET_GOODS, data })
    })
  }
}

export function setCurrency(currency) {
  return (dispatch, getState) => {
    const state = getState()
    console.log(state)
    dispatch({
      type: SET_CURRENCY,
      data: currency.toUpperCase()
    })
  }
}
