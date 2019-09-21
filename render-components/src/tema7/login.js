import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Inicia sesión para ver contenido privado',
            isLoggedIn: false
        }
    }

    handleLogin = () => {
        const { tasks, isLoggedIn } = this.state
        

        if (isLoggedIn) {
            this.setState({
                text: 'Inicia sesión para ver contenido privado',
                isLoggedIn: !isLoggedIn
            })
        } else {
            this.setState({
                text: 'Esta pagina solo puedo verla por que estoy logueado',
                isLoggedIn: !isLoggedIn
            })
        }

        
    }

    render() {
        const { text, isLoggedIn } = this.state
        
        return (
            <>
            { isLoggedIn ? text :  text }
            <button onClick = { this.handleLogin }>Login</button>
            </>
        ) 
    }
}

export default Login
