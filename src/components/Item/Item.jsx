import React from "react";
import products from '../ItemListContainer/ItemListContainer';
import './Item.css';

function Card({ img, name, price }) {
    const data = products
    console.log(data)
    return (
        <div>
            {data?.map(r => {
                return (
                    <div>
                        <img src={r.img} alt='producto' />
                        <h3>{r.name}</h3>
                        <h3>${r.price}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;