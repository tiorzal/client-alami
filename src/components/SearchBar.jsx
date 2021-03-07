import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../store/actions'

export default function SearchBar() {

  const dispatch = useDispatch()
  const [localState, setLocalState] = useState("")
  const {isLoading} = useSelector( state => state.ProductReducer)

  const onClickHanlder = () => {
    dispatch(searchProduct(localState))
  }

  const onChangeHandler = (e) => {
    setLocalState(
      e.target.value
    )
  }
  return (
    <div className="search-bar">
      <div className="search-input">
        <input 
          type="text"
          value={localState}
          onChange={onChangeHandler}
          disabled={isLoading}
        />
      </div>
      <div className="search-button">
        <button
          onClick={onClickHanlder}
          disabled={isLoading}
        >{isLoading ? "wait" : "search"}</button>
      </div>
    </div>
  )
}
