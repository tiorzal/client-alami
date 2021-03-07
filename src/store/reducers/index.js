const initState = {
  products: []
}

function ProductReducer (state = initState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }  
    default:
      return state
  }
}

export default ProductReducer