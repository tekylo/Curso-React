import React, { useState, useEffect } from 'react';

function useCallAPI(url) {
    const [data, setData] = useState([])
  
    const getData = async (url) => {
      let response = await fetch(url)
      let data = await response.json()
      setData(data)
    }
  
    useEffect(() => {
      getData(url)
    }, [])
  
    return data
  }

function Ejercicio18() {

    const data = useCallAPI('https://jsonplaceholder.typicode.com/todos')

    return (
      <ul>
        {data.length ? data.slice(0, 10).map((el, key) => (
          <li key={key}>{el.id}. {el.title}</li>
        )) : ''}
      </ul>
    );
  } 
  
  export default Ejercicio18;