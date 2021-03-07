import axios from '../../config/axiosinstance'
import Swal from 'sweetalert2'

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_IS_LOADING', payload: true})
      const { data } = await axios({
        url: '/1',
        method: "GET",
      })        
      if(data){
        dispatch({type: 'SET_PRODUCTS', payload: data.products})
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: 'SET_IS_LOADING', payload: false})
    }
  }
}

export const searchProduct = (key) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_IS_LOADING', payload: true})
      const { data } = await axios({
        url:`/search/${key}`,
        method: "GET"
      })

      if(data){
        setTimeout( () => {
          dispatch({type: 'SET_PRODUCTS', payload: data.products})
        }, 2000)
      }
    } catch (error) {
      console.log(error);
    } finally {

      setTimeout( ()=> {
        dispatch({ type: 'SET_IS_LOADING', payload: false})
      }, 3000)
    }
  }
}

export const addProduct = (payload) => {
  return async (dispatch) => {
    try {
      payload.SELLER_ID = 1
      const response = await axios({
        url: "/",
        method: "POST",
        data: payload
      })
      console.log(response);
      if(response){
        Swal.fire({
          title: 'Berhasil menambahkan product',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          position: 'center'
        })
        dispatch(fetchProduct())
      }
    } catch (error) {
      console.log(error);
    }


  }
}