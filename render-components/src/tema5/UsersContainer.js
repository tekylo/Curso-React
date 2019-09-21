import React, { Component } from 'react';

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ['jose'],
        }
    }

    componentDidMount() {
        const { users } = this.state
        this.setState({
            users: [...users, ' antonio'],
        })
    }

    componentWillUnmount() {
        console.log('¡Componente destruido!')
    }

    render() {
        const { users, state } = this.state
        return (
            <>
            { users }
            { JSON.stringify(users) }
            </>
        )
    }
}

class UsersContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: true
        }
    }

    render() {
        const { show } = this.state

        return (
            <>
                {show ? <UsersList /> : ''}
                <button onClick = { () => this.setState({ show: !show })}>Mostrar/ocultar</button>
            </>
        )
    }
}

export default UsersContainer