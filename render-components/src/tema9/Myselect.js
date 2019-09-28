import React, { Component } from 'react';

class MySelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ['grapefruit', 'lime', 'coconut', 'mango'],
            items: {
                
            },
            selectedFruit: 'mango',
        }
    }

    handleChange = () => {
    }

    render(props) {
        const { selectedFruit, value } = this.state
        
        return (
            <select value={ selectedFruit }>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        )
    }
}

export default MySelect