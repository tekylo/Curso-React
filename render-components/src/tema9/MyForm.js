import React, { Component } from 'react';
import InputText from './InputText';
import TextArea from './TextArea';
import RadioButton from './RadioButton';
import Select from './Select';
import ConditionalRender from './ConditionalRender';
import Checkbox from './Checkbox'

class Myform extends Component {

        state = {
            name: '',
            firstname: '',
            description: '',
            gender: 'female',
            age: 27,
            selectedCountry: 'es',
            selectedProvincies: '',
            checkedItems: new Map(),
        }

    countries = [
        {
          value: 'es',
          text: 'spain'
        },
        {
          value: 'usa',
          text: 'usa'
        }
      ]

    provinces = [
        {
            value: 'gualadalajara',
            text: 'Gualadalajara'
        },
        {
            value: 'madrid',
            text: 'Madrid'
        }
    ]

    checkboxes = [
        {
          name: 'Games',
          key: 'games',
          label: 'games',
        },
        {
          name: 'Football',
          key: 'football',
          label: 'football',
        },
        {
          name: 'Basketball',
          key: 'basketball',
          label: 'basketball',
        },
        {
          name: 'Art',
          key: 'art',
        },
      ];

    

    handleChangeInput = (event) => {
        console.log(event.target.value)
        const { name, value } = event.target

        this.setState({
            [name]: value,
            selectedCountry: value
        })
    }

    handleChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
      }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        const { name, firstname, description, gender, age, selectedCountry, selectedProvincies } = this.state

        return(
        <>
            <form onSubmit={ this.handleSubmit }>
                <InputText
                    label = 'Name'
                    name = 'name'
                    value = { name }
                    onChange = { this.handleChangeInput }
                    type = 'text'
                />
                <br />
                <br />
                <InputText
                    label = 'Firstnames'
                    name = 'firstname'
                    value = { firstname }
                    onChange = { this.handleChangeInput }
                    type = 'text'
                />
                <br />
                <br />
                <TextArea
                    label = 'Description'
                    name = 'description'
                    value = { description }
                    onChange = { this.handleChangeInput }
                />
                <br />
                <br />
                <RadioButton
                    label = 'Gender'
                    value = { gender }
                    onChange = { this.handleChangeInput }
                />
                <br />
                <br />
                <InputText
                    label = 'Age'
                    name = 'age'
                    value = { age }
                    onChange = { this.handleChangeInput }
                    type = 'number'
                />
                <br />
                <br />
                <Select
                    items={this.countries} 
                    value={ selectedCountry } 
                    onChange={this.handleChangeInput}
                />
                <ConditionalRender show={selectedCountry === 'es'}>
                    <Select
                        items={this.provinces} 
                        value={ selectedProvincies }
                        name = 'selectedProvincies' 
                        onChange={this.handleChangeInput}
                    />   
                </ConditionalRender>
                <br />
                <br />
                {
                    this.checkboxes.map(item => (
                    <label key={item.key}>
                        {item.name}
                        <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                    </label>
                    ))
                }
                <br />
                <br />
                <button>Send data!</button>
                <br />
                <br />
            </form>
        </>
        )
    }
}

export default Myform