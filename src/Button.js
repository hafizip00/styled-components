import {styled , keyframes} from 'styled-components'

import React from 'react'

export const Button = styled.button`
    background-color: ${(props) => props.variant === 'outline' ? '#765453' : '#123444'}; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
   
    transition:.4s all ease-out;

    &:hover 
    {background-color: ${(props) => props.variant !== 'outline' ? '#765453' : '#123444'};
}

`

export const Fancy = styled(Button)`
    background-image: linear-gradient(to right , #444221 , #DDFF33);
`

export const Box = styled.section`
    background-color: blueviolet;
    color: white;
    max-width: fit-content5;
    display: flex;
`

export const BUTTONSUBMIT = styled(Button).attrs({
    type : 'submit'
})`
border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

`

