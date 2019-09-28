import React from 'react';

export default props => 
    <>
        <label> { props.label } </label>
        <input checked = {props.value === 'male'} type="radio" name = 'male' onChange = {props.onChange} />
        <input checked = {props.value === 'female'} type="radio" name = 'female' onChange = {props.onChange} />
    </>