import React from 'react';

export default props => 
    <>
        <label> { props.label } </label>
        <textarea { ...props }/>
    </>