import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';


function Home() {
    const { idcategory } = useParams();
    const [productos, setProductos] = useState([])
    const dataType =
        [{
            id: 1,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/groomed.jpg',
            type: 'men',
            name: 'Remera Grooving',
            price: 4980,
            colores: 'Blanco',
            material: 'Jersey',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 2,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/cament.jpg',
            type: 'men',
            name: 'Camisa Burton',
            price: 12980,
            colores: 'Blanco',
            material: 'Poplin',
            talle: ['S', 'M', 'XL']
        },
        {
            id: 3,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/danmed.jpg',
            type: 'men',
            name: 'Remera Danton',
            price: 4980,
            colores: 'Negro, Beige, Chocolate',
            material: 'Jersey',
            talle: ['M', 'L', 'XL']
        },
        {
            id: 4,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/beien.jpg',
            type: 'woman',
            name: 'Babucha Prive',
            price: 9980,
            colores: 'Beige, Rosa, Camel',
            material: 'Sire',
            talle: ['S', 'M', 'L']
        },
        {
            id: 5,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/FALDAENT.jpg',
            type: 'woman',
            name: 'Falda Muccia',
            price: 7980,
            colores: 'Camel, Blanco, Negro',
            material: 'Gabardina',
            talle: ['S', 'M', 'XL']
        },
        {
            id: 6,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/tosmed.jpg',
            type: 'woman',
            name: 'Campera Prive',
            price: 19580,
            colores: 'Rosa, Camel, Beige',
            material: 'Sire',
            talle: ['S', 'L', 'XL']
        },
        {
            id: 7,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/10/MANGAMED.jpg',
            type: 'fachi',
            name: 'Buzo Bulgaro',
            price: 9780,
            colores: 'Negro',
            material: 'Rústico',
            talle: ['S', 'M', 'L']
        },
        {
            id: 8,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/09/ROENT-2.jpg',
            type: 'fachi',
            name: 'Campera Edd',
            price: 19980,
            colores: 'Naranja, Azul, Amarillo, Verde',
            material: 'Sire',
            talle: ['S', 'L', 'XL']
        },
        {
            id: 9,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/03/BABUMAMED.jpg',
            type: 'fachi',
            name: 'Buzo Geek',
            price: 9180,
            colores: 'Bordo, Camel, Beige, Negro',
            material: 'Rústico',
            talle: ['M', 'L', 'XL']
        }
        ]

    useEffect(() => {
        const products = new Promise((res, rej) => {
            setTimeout(() => {
                res(dataType);
            }, 2000);
        });

        products.then(res => {
            if (idcategory) {
                setProductos(res.filter(el => el.type === idcategory))
            }

            else { setProductos(res) }
        });
    }, [idcategory])

    return (

        <div className="container-img">

            <ItemList filtrado={productos} />


        </div>
    )
}

export default Home;