import React, { useEffect } from 'react'
import { fetchProduct } from '../store/actions'
import { useDispatch, useSelector} from 'react-redux'
import { SearchBar } from '../components'

export default function HomePage() {

  const dispatch = useDispatch()
  const {products} = useSelector( state => state.ProductReducer)

  useEffect( () => {
    dispatch(fetchProduct())
  }, [dispatch])

  return (
    <div>
      <SearchBar/>
      {JSON.stringify(products)}
    </div>
  )
}
