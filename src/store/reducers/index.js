const initState = {
  products: [],
  isLoading: false,
}

function ProductReducer (state = initState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }  
    default:
      return state
  }
}

export default ProductReducer