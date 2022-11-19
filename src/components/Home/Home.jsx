import React from 'react'
import Men from '../../images/card/men.jpg'
import Women from '../../images/card/woman.jpg'
import Fachi from '../../images/card/fachi.jpg'
import { Link } from 'react-router-dom'
import '../Home/Home.css'

export default function Home() {
    return (
            <div className='container-home'>
        <Link to = "/category/men">
                <img className='img-home' src={Men} alt="Hombre" />
            </Link>
            <Link to = "/category/woman">
                <img className='img-home' src={Women} alt="Mujer" />
            </Link>
            <Link to = "/category/fachi">
                <img className='img-home' src={Fachi} alt="Fachi" />
            </Link>
        </div>
    )
}