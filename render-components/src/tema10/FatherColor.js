import React, { Component } from 'react'
import ColorPicker from './ColorPicker'
import TextColor from './TextColor'
import { thisTypeAnnotation } from '@babel/types'

class FatherColor extends Component {
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
        <ColorPicker color = {this.state.color} onChange = { this.handleColor }/>
        <TextColor color = {this.state.color}/>
        </>
        )
    }
}

export default FatherColor