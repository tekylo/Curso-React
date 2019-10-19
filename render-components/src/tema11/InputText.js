import React from 'react';

export default props => 
    <>
        <div>
            {props.items.map(item => (
                <>
                <span>Nombre: {item.text}</span>
                <span> Precio: {item.value}</span>
                <br />
                <button name={item.text} value={item.value} onClick = { props.onClick }>AÑADIR PRODUCTO</button>
                <br />
                <br />
                </>
            ))} 
            
        </div>
    </>