import React from 'react'
import styled from 'styled-components'
import { EducationsItems, ExperiencesItems } from '../data'
import { mobile } from '../Responsive'

const Container=styled.div`
    display: flex;
    margin-left: 100px;
    height: 100vh;
    overflow: hidden;
    ${mobile({height:'auto',flexDirection:"column",marginLeft:"0",width:"100vw",padding:"20px",boxSizing:"border-box",paddingTop:60})};

`
const Experiences=styled.div`
    flex: 1;
    
    ${mobile({
        marginBottom:"20px",
        flexDirection:'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        overflow:'hidden'
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
    ${mobile({
       width: '80%',
        })};
    
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
        fontSize:18,
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
    ${mobile({
        marginBottom:"20px",
        flexDirection:'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        overflow:'hidden'
        })};
     
`
const Title=styled.h1`
    padding-top: 100px;
    color:var(--dark);
    ${mobile({fontSize:"40px",padding:0,textAlign:"center",margin:"50px 0"})};

`
const Info=styled.div`
    display: inline-block;
    vertical-align: top;
    max-width: 432px;
    margin-left: 6em;
`
const Circle=styled.div`
    background: #C1DF00;
    border-radius:50%;
    top: 0;
    left: 400px;
    z-index: 0;
    position: absolute;
    width: 720px;
    height: 720px;
    mix-blend-mode: multiply;
    filter:blur(300px);
    opacity: .3;
    ${mobile({left:0,width:'100vw',height:'120vh'})};
    
`

const Features = () => {
    return (
        <Container>
            <Circle/>
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
