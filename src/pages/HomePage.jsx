import React from 'react'
import { SearchBar, AddProductFrom, ProductList } from '../components'

export default function HomePage() {

  // const dispatch = useDispatch()
  // const {products} = useSelector( state => state.ProductReducer)

  // useEffect( () => {
  //   dispatch(fetchProduct())
  // }, [dispatch])

  return (
    <div>
      <SearchBar/>
      <AddProductFrom/>
      <ProductList/>
    </div>
  )
}
