import React from 'react';

const getDate = () => new Date().toDateString()


export default () => <span>{ getDate() }</span>