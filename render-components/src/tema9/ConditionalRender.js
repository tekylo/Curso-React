import React, { Component } from 'react';

export default props =>
    <>
    {props.show ? props.children : ''}
    </>