import React from 'react';
import ShowMessage from './ShowMessage';

export default () => {
    const show = true
    return (<>{ show ? <ShowMessage /> : '' }</>)
}