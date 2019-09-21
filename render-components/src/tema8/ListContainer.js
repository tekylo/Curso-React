import React, { Component } from 'react';

const RemoveTaskButton = props => 
    <button onClick = { props.onClick }>Remove</button>

const AddTaskButton = props => 
    <button onClick = { props.onClick }>Add</button>

const EditTaskButton = props => 
    <button onClick = { props.onClick }>Edit</button>

const InputText = props => 
    <input type='text' onChange = { props.handleInput } />

const ListItem = props => 
    <li key={ props.task }> <InputText ></InputText> { props.task } </li>

const List = props => 
    <ul>{ props.tasks.map((task) => 
        < ListItem task = { task } />
        )}</ul>

class ListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: ['Tarea 1', 'Tarea 2', 'Tarea 3'],
            newTask: '',
        }
    }

    handleInput = (event) => {
        const { value } = event.target

        this.setState({ 
            newTask: value
        })
    }

    addTask = () => {
        const { tasks, newTask } = this.state

        this.setState({ 
            tasks: [...tasks, newTask]
        })
    }

    editTask = () => {
        const { tasks, newTask } = this.state
        const found = tasks.find(item => item === newTask)

        console.log(tasks)
        console.log(newTask)
        console.log(found)
    }

    removeTask= () => {
        const { tasks, newTask } = this.state
        const filteredItems = tasks.filter(item => !newTask.includes(item))

        this.setState({ 
            tasks: filteredItems
        })
    }

    render() {
        const { tasks, text } = this.state

        return (
            <>
                <InputText type = 'text' handleInput = { this.handleInput } />
                <AddTaskButton onClick = { this.addTask } />
                <RemoveTaskButton onClick = { this.removeTask } />
                <EditTaskButton onClick = { this.editTask } />
                <List tasks = { tasks }/>
            </>
        )
    }
}

export default ListContainer