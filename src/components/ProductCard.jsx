import React from 'react'

export default function ProductCard({ data }) {
  return (
    <div className="w-25 p-2">
      <div className="card">
        <div className="card-title text-center">{data.name}</div>
        <div className="card-body text-center">
          <small>harga : {'Rp. ' + new Intl.NumberFormat(['id']).format(data.price)} / {data.unit}</small>
        </div>
      </div>
    </div>
  )
}
