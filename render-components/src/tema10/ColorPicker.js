import React, { Component } from 'react';

class ColorPicker extends Component {
    render() {

        return(
        <>
            <input type='color' onChange={this.props.onChange}/>
        </>
        )
    }
}

export default ColorPicker