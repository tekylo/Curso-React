import React, { Component } from 'react';

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
            <button onClick={ this.increment }>Incrementar</button>
            <div>{ count }</div>
            <button onClick={ this.decrement }>Decrementar</button>
            </>
        )
    }
}


export default Count