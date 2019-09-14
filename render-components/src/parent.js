import React, {Component} from 'react';
import Child from './child'

const hello = () => console.log('Hola a todos!')

export default props => <Child onPress = { hello } ></Child>