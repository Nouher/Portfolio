import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container=styled.div`
    height: 30vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    ${mobile({width:"100vw"})};

`
const Item=styled.div`
    color: #5b5b5b;
    font-size: 16px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 1rem;
    line-height: 1.5;
    ${mobile({width:"90vw",textAlign:"center"})};

`

const Footer = () => {
    return (
        <Container>
            <Item>Copyright © 2021 NHR . All rights reserved</Item>
            <Item>Designed by <span style={{color:"#007bff"}}>Me</span></Item>
        </Container>
    )
}

export default Footer
