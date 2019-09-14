import React, { Component } from 'react';

class String extends Component {
    state = {
        text: '',
    }

    increment = () => {
        const { text } = this.state
        const letter = 'a'

        this.setState( prevState => ({
            text: prevState.text + letter
        }))

        return text
      }

      
    decrement = () => {
        const { text } = this.state

        this.setState( prevState => ({
            text: prevState.text.slice(0, -1)
        }))

        return text
      }
    

    render() {
        const { text } = this.state
        
        return (
            <>
            <button onClick={ this.increment }>Incrementar letra</button>
            <div>{ text }</div>
            <button onClick={ this.decrement }>Decrementar letra</button>
            </>
        )
    }
}


export default String