import React from "react";

export default function ItemListContainer({ greeting }) {
    return <>{greeting ? <h1 className="saludo">¡Bienvenid@ a FachiStyle!</h1> : ' '}</>;
}