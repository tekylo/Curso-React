import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import ButtonRed from './ButtonRed'

function ButtonStyle() {

    const Button = styled.button`
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};
        font-size: 1.5em;
        text-align: center;
        `;

        const ButtonDefault = styled(Button)`
        background: gray
        `;

        const ButtonSuccess = styled(Button)`
        background: green
        `;

        const ButtonWarning = styled(Button)`
        background: yellow
        `;

        const ButtonError = styled(Button)`
        background: red
        `;

        const ButtonInfo = styled(Button)`
        background: blue
        `;
  
    return (
      <div>
          <ButtonRed/>
        <Button primary = {''}>Default</Button>
        <Button primary = {'palevioletred'}>Default</Button>
        <Button primary = {'white'}>Default</Button>
        <Button primary = {'black'}>Default</Button>
        <ButtonDefault/>
        <ButtonDefault>Default</ButtonDefault>
        <ButtonSuccess>Success</ButtonSuccess>
        <button>Warning</button>
        <button>Error</button>
        <button>Info</button>
      </div>
    );
  }
  

  export default ButtonStyle