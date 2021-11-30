import React from 'react'
import styled from 'styled-components'
import { EducationsItems, ExperiencesItems } from '../data'
import { mobile } from '../Responsive'

const Container=styled.div`
    display: flex;
    margin-left: 100px;
    height: 100vh;
    ${mobile({height:'auto',flexDirection:"column",marginLeft:"0",width:"100vw",padding:"20px",boxSizing:"border-box"})};

`
const Experiences=styled.div`
    flex: 1;
    
    ${mobile({
        marginBottom:"20px",
        flexDirection:'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        })};

    
`
const InfosContainer=styled.div`
    position: relative;
    padding: 22px 0;
    &::before{
    content: "";
    display:${props=>props.end === true && "none"};
    background: #474559;
    width: 3px;
    height: 100%;
    position: absolute;
    left: 38px;
    }
    
    `

const Year=styled.div`
    color:#fff;
    font-weight: bold;
    background: #474559;
    border-radius: 100%;
    position: absolute;
    width: 75px;
    height: 75px;
    line-height: 75px;
    text-align: center;
    `
const TitleS=styled.h3`
    font-weight: bold;
    color: #484848;
    font-size: 1.75rem;
    letter-spacing: -1px;
    margin-bottom: 0.5rem;
    margin-top: 0;
    ${mobile({
        fontSize:"20px",
    })};
    
    
    `
const Desc=styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;
    color: #5b5b5b;
    max-width: 432px;
    ${mobile({
        fontSize:"15px",
    })};
    
    `
const Educations=styled.div`
    flex: 1;  
     
`
const Title=styled.h1`
    margin: 100px 0;
    color:var(--dark);
    ${mobile({fontSize:"40px",textAlign:"center",margin:"50px 0"})};

`
const Info=styled.div`
    display: inline-block;
    vertical-align: top;
    max-width: 432px;
    margin-left: 6em;
`

const Features = () => {
    return (
        <Container id='resume'>
            <Experiences>
                <Title>Experiences</Title>
                {ExperiencesItems.map(item=>(
                    <InfosContainer  end={item.end}>
                        <Year>{item.date}</Year>
                        <Info>
                            <TitleS>{item.title}</TitleS>
                            <Desc>{item.desc}</Desc>
                        </Info>
                    </InfosContainer>
                ))}
            </Experiences>
            <Educations>
                <Title>Educations</Title>
                {EducationsItems.map(item=>(
                    <InfosContainer end={item.end}>
                        <Year>{item.date}</Year>
                        <Info>
                            <TitleS>{item.title}</TitleS>
                            <Desc>{item.desc}</Desc>
                        </Info>
                    </InfosContainer >
                ))}
            </Educations>
        </Container>
    )
}

export default Features
