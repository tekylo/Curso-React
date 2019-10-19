import React, { Component } from 'react'
import Productos from './Productos'
import Carrito from './Productos'



class Shop extends Component {
    state = {
        color: 'red'
    }
    handleColor = (e) => {
        this.setState({
            color: e.target.value
        })
    }
    render() {

        return(
        <>
        <h1>Tienda</h1>
        <h3>Productos</h3>
        
        <Productos/>

        <h3>Carrito</h3>

        <Carrito/>
        
        </>
        )
    }
}

export default Shop