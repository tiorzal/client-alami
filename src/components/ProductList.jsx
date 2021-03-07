import React, { useEffect } from 'react'
import { fetchProduct } from '../store/actions'
import { useDispatch, useSelector} from 'react-redux'

export default function ProductList() {

  const dispatch = useDispatch()
  const {products} = useSelector( state => state.ProductReducer)

  useEffect( () => {
    dispatch(fetchProduct())
  }, [dispatch])
  return (
    <div>
      {JSON.stringify(products)}
    </div>
  )
}
