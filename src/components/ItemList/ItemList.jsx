import React from 'react'
import './ItemList.css'

export default function ItemList({ filtrado }) {
    return (
        filtrado.map(productos => {
            return (
                    <div className='card-container'>
                        <img className='card-img' src={productos.img} alt='producto' />
                        <h3 className='card-text'>{productos.name}</h3>
                        <h3 className='card-text'>${productos.price}</h3>
                    </div>
            )
        })
    )
}