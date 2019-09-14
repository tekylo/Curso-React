import React from 'react';

const ShowMessage = () => {
    const user = {
        msg: 'Ahora puedes leer esto',
        flag: false
    }

    return  <p>{ user.flag ? user.msg : 'El mensaje esta desactivado' }</p>
}

export default ShowMessage