import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct, fetchProduct } from '../store/actions'

export default function SearchBar() {

  const dispatch = useDispatch()
  const [localState, setLocalState] = useState("")
  const {isLoading} = useSelector( state => state.ProductReducer)

  const onClickHanlder = () => {
    if(localState.length > 0){
      dispatch(searchProduct(localState))
    }else{
      dispatch(fetchProduct())
    }
  }

  const onChangeHandler = (e) => {
    setLocalState(
      e.target.value
    )
  }
  return (
    <div className="d-flex justify-content-end align-items-center w-100 p-2 bg-secondary bg-gradient">
      <div className="mx-1">
        <input
          type="text"
          value={localState}
          onChange={onChangeHandler}
          disabled={isLoading}
        />
      </div>
      <div className="">
        <button
          className= "btn btn-primary"
          onClick={onClickHanlder}
          disabled={isLoading}
        >{isLoading ? "tunggu" : "cari"}</button>
      </div>
    </div>
  )
}
