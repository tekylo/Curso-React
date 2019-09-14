import React from 'react';

const ShowName = () => {
    const user = {
        name: 'Jose',
    }

    return  <p name = { user.name }>{ user.name }</p>
}

export const ShowLastName = () => <p>Lopez</p>

export default ShowName