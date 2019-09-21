import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(item => {
            this.setState({
                tasks: JSON.stringify(item),
            })
        }) 
    }

    render() {
        const { tasks } = this.state

        return (
            <>
                { tasks }
            </>
        ) 
    }
}

export default Task
