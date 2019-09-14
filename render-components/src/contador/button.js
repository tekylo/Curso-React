import React, { Component } from 'react'

class ButtonCount extends Component {


    render() {
        const { children, onPress } = this.props
        return (
            <>
            <button onClick = { onPress }>{ children }</button>
            </>
        )
    }
}

export default ButtonCount