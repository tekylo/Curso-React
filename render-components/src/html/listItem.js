import React, {Component} from 'react';

class ListItem extends Component {
    render() {
        const { items } = this.props
        console.log(items)
        
        const item = [...items].map((ite) => {
            console.log(ite)
            return ite
        })

        return <li>{ ite }</li>;
    }
}

export default ListItem