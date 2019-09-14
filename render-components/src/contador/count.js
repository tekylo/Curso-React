import React, { Component } from 'react'
import ButtonCount from './button'

class Count extends Component {
    state = {
        count: 0,
    }

    increment = () => {
        const { count } = this.state

        this.setState( prevState => ({
            count: count + 1
        }))

        return count
    }

      
    decrement = () => {
        const { count } = this.state

        this.setState( prevState => ({
            count: count - 1
        }))

        return count
    }
    

    render() {
        const { count } = this.state
        
        return (
            <>
            <ButtonCount onPress = { this.increment }>Incrementar</ButtonCount>
            <div>{ count }</div>
            <ButtonCount onPress = { this.decrement }>Decrementar</ButtonCount>
            </>
        )
    }
}


export default Count