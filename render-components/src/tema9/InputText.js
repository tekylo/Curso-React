import React from 'react';
export default props => 
    <>
        <label> { props.label }</label>
        <input type={props.type ? props.type : 'text' } name = { props.name } onChange = {props.onChange}/>
    </>