import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/actions'

export default function AddProductForm() {

  const dispatch = useDispatch()
  const [localData, setLocalData] = useState({
    NAMA: "",
    SATUAN: "",
    HARGA_SATUAN: 0
  })

  const onChangeHandler = (e) => {
    const { name } = e.target
    let value = e.target.value

    if(name === "HARGA_SATUAN"){
      value = Number(value)
    }

    setLocalData({
      ...localData,
      [name]: value
    })
  }

  const onSubmitHandle = (e) => {
    e.preventDefault()
    console.log(localData);
    dispatch(addProduct(localData))
  }

  return (
    <div className="row">
      <form onSubmit={onSubmitHandle} className="col-12 mt-2">
          <div className="row">
            <div className="col-8">
              <div className="d-flex flex-row align-items-center mb-2">
                <label className="form-label mx-2 col-3">Nama Produk</label>
                <input type="text" name="NAMA" className="form-control col-8" required onChange={onChangeHandler} value={localData.NAMA}/>
              </div>
              <div className="d-flex flex-row align-items-center mb-2">
                <label className="form-label mx-2 col-3">Satuan</label>
                <input type="text" name="SATUAN" className="form-control col-8" required onChange={onChangeHandler} value={localData.SATUAN}/>
              </div>
              <div className="d-flex flex-row align-items-center mb-2">
                <label className="form-label mx-2 col-3">Harga Persatuan</label>
                <input type="number" name="HARGA_SATUAN" className="form-control col-8" required onChange={onChangeHandler} value={localData.HARGA_SATUAN} />
              </div>
            </div>
            <div className="col-4 d-flex justify-content-start align-items-center">
                <input className="btn btn-primary h-50" type="submit" value="tambah"/>
            </div>  
          </div>
      </form>
    </div>
  )
}
