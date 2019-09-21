import React, { Component } from 'react';

class MySelect extends Component {
    constructor(props) {
            super(props)
            this.state = {
                select: '',
            }
        }

        handleText = (event) => {
            const { value } = event.target

            this.setState({
                select: value
            })
        }
    
    
        render() {
            const { select } = this.state
    
            return (
                <>
                    { select }
                    <select onChange = { this.handleText }>
                        <option>Rojo</option>
                        <option>Verde</option>
                        <option>Negro</option>
                    </select>
                </>
            ) 
        }
    }

class InputJson extends Component {
constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }


    render() {
        const { text } = this.state

        return (
            <>
                { text }
                <input type = "text" onChange = { (e) => this.setState({text: e.target.value}) }></input>
            </>
        ) 
    }
}

class ButtonJson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: '',
            show: false
        }
    }

    handleClick = () => {
        const { tasks, show } = this.state

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(item => {
            this.setState({
                tasks: JSON.stringify(item),
            })
        })

        this.setState({ 
            show: !show
        })
    }

    render() {
        const { tasks, show } = this.state

        return (
            <>
                
                <button onClick = { this.handleClick }>Mostrar/ocultar</button>
                {show ? tasks : ''}
                <h2>2</h2>
                <InputJson/>
                <h2>3</h2>
                <MySelect/>
            </>
        ) 
    }
}

export default ButtonJson
