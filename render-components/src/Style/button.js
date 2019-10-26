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
        color: black
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
        <Button >Default</Button>
        <Button palevioletred >Default</Button>
        <Button white>Default</Button>
        <ButtonDefault>Default</ButtonDefault>
        <ButtonSuccess>Success</ButtonSuccess>
        <ButtonWarning>Warning</ButtonWarning>
        <ButtonError>Error</ButtonError>
        <ButtonInfo>Info</ButtonInfo>
      </div>
    );
  }
  

  export default ButtonStyle