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
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 3,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/danmed.jpg',
            type: 'men',
            name: 'Remera Danton',
            price: 4980,
            colores: 'Negro, Beige, Chocolate',
            material: 'Jersey',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 4,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/beien.jpg',
            type: 'woman',
            name: 'Babucha Prive',
            price: 9980,
            colores: 'Beige, Rosa, Camel',
            material: 'Sire',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 5,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/FALDAENT.jpg',
            type: 'woman',
            name: 'Falda Muccia',
            price: 7980,
            colores: 'Camel, Blanco, Negro',
            material: 'Gabardina',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 6,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/tosmed.jpg',
            type: 'woman',
            name: 'Campera Prive',
            price: 19580,
            colores: 'Rosa, Camel, Beige',
            material: 'Sire',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 7,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/10/MANGAMED.jpg',
            type: 'fachi',
            name: 'Buzo Bulgaro',
            price: 9780,
            colores: 'Negro',
            material: 'Rústico',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 8,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/09/ROENT-2.jpg',
            type: 'fachi',
            name: 'Campera Edd',
            price: 19980,
            colores: 'Naranja, Azul, Amarillo, Verde',
            material: 'Sire',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 9,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/03/BABUMAMED.jpg',
            type: 'fachi',
            name: 'Buzo Geek',
            price: 9180,
            colores: 'Bordo, Camel, Beige, Negro',
            material: 'Rústico',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 10,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/BOENT-1.jpg',
            type: 'men',
            name: 'Campera World Wild',
            price: 21980,
            colores: 'Verde, Azul, Bordo, Beige',
            material: 'Sire',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 11,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/10/CHARMED.jpg',
            type: 'men',
            name: 'Remera Charm',
            price: 4580,
            colores: 'Crema, Verde',
            material: 'Jersey / Bordada',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 12,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/09/celesteen.jpg',
            type: 'men',
            name: 'Bermuda Dancer',
            price: 7180,
            colores: 'Celeste, Negro, Salmon, Marino',
            material: 'Rustico',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 13,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/11/JARDIMED-1.jpg',
            type: 'woman',
            name: 'Jumper Alexa',
            price: 7580,
            colores: 'Beige, Camel, Negro',
            material: 'Gabardina',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 14,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/10/BODYMED.jpg',
            type: 'woman',
            name: 'Body Olivia',
            price: 7180,
            colores: 'Aqua, Lila, Negro, Blanco',
            material: 'Lycra',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 15,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/08/TOBIENT.jpg',
            type: 'woman',
            name: 'Babucha Harvard',
            price: 9980,
            colores: 'Beige, Rosa, Verde, Negro',
            material: 'Rustico',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 16,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/10/TENT.jpg',
            type: 'fachi',
            name: 'Top Candy',
            price: 3980,
            colores: 'Negro',
            material: 'Lycra',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 17,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/10/CHOMBENT.jpg',
            type: 'fachi',
            name: 'Chomba Remember',
            price: 6980,
            colores: 'Negro, Blanco',
            material: 'Jersey',
            talle: ['S', 'M', 'L', 'XL']
        },
        {
            id: 18,
            img: 'https://batukjeans.com.ar/site/wp-content/uploads/2022/09/short-7087-e.jpg',
            type: 'fachi',
            name: 'Short Kledys',
            price: 13780,
            colores: 'Verde, Azul, Naranja, Negro',
            material: 'Sire / Bolsillos frontales con fuelle y cierre',
            talle: ['S', 'M', 'L', 'XL']
        },
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