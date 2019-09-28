import React, { Component } from 'react';


class MyOptions extends Component {
    render(props) {

        console.log(props)
        return (
            <option value="grapefruit">Grapefruit</option>
        )
    }
}

export default MyOptions