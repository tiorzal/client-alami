import React, { useEffect } from 'react'
import { fetchProduct } from '../store/actions'
import { useDispatch, useSelector} from 'react-redux'
import ProductCard from './ProductCard'

export default function ProductList() {

  const dispatch = useDispatch()
  const {products} = useSelector( state => state.ProductReducer)

  useEffect( () => {
    dispatch(fetchProduct())
  }, [dispatch])
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="row">
        { products.map( product => (
          <ProductCard key={product.id} data={product}/>
        ))}
      </div>
    </div>
  )
}
