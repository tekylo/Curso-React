import React, { Component } from 'react'
import Select from './Select'
import InputText from './InputText'

class HandleCarrito extends Component {
    state = {
        selectedProduct: '80'
    }

    productos = [
        {
            id: 1,
            value: '80',
            text: 'Zapatilla'
        },
        {
            id: 2,
            value: '15',
            text: 'Camiseta'
        },
        {
            id: 3,
            value: '50',
            text: 'Pantalon'
        }
    ]

    handleChangeInput = (e) => {
        console.log(e.target)
        this.setState({
            selectedProduct: e.target.value
        })
    }
    
    render() {

        return(
        <>
            <InputText
                items={this.productos} 
                onClick = {this.handleChangeInput}
            />
        </>
        )
    }
}

export default HandleCarrito