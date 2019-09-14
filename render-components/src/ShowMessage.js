import React from 'react';

const ShowMessage = () => {
    const message = {
        text: 'Ahora puedes leer esto',
        flag: true
    }

    return  <p>{ message.flag ? message.text : 'El mensaje esta desactivado' }</p>
}

export default ShowMessage