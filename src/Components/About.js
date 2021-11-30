import React from 'react'
import styled from 'styled-components'
import svg from '../assets/undraw_programming.svg'
import doc from '../assets/doc.svg'
import Pdf from '../assets/Resume.pdf'
import { mobile } from '../Responsive'

const Container=styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    
    ${mobile({
        width:"100vw",
        flexDirection:"column",
        height:'auto',
        justifyContent: "center",
        })};
    

`
const Left=styled.div`
    flex: 1;
    padding:0 60px 0 70px ;
    ${mobile({margin:"200px 0 50px 0",padding:'0'})};
`
const Right=styled.div`
    flex: 1;
`
const Titles=styled.h2`
    font-size: 16px;
    color:var(--gray);
    margin:0 0 30px 20px;
    ${mobile({margin:"0",fontSize:"13px",textAlign:"center",marginBottom:"30px"})};

    


`
const Title=styled.h1`
    font-size: 45px;
    margin-bottom: 20px;
    ${mobile({fontSize:"40px",textAlign:"center"})};
    

`
const Image=styled.img`
    height: 500px;
    ${mobile({height:"200px"})};

`
const Desc=styled.p`
    font-size: 18px;
    color: var(--gray-dark);
    margin-bottom: 20px;
    ${mobile({padding:"30px",textAlign:"center"})};


`
const ButtonContainer=styled.div`
    display: flex;
    
    ${mobile({flexDirection:"column",alignItems: "center",marginTop:"20px"})};

`
const ButtonResume=styled.a`
    text-decoration: none;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px 30px;
    margin-right:10px ;
    border: none;
    border-radius:25px;
    font-size: 16px;
    font-weight: 600;
    color:var(--dark);
    transition: all 300ms ease;
    &:hover{
        background-color: var(--warning );
    }
    ${mobile({width:"50%",marginBottom:"10px",marginRight:"0"})};

    
`
const Button=styled.button`
    padding:10px 30px;
    margin-Right:20px ;
    border: none;
    border-radius:25px;
    font-size: 16px;
    font-weight: 600;
    color:var(--white);
    background-color: var(--dark);
    transition: all 500ms ease;
    &:hover{
        background: var(--yellow);
    }
    ${mobile({display:"none"})};

`

const About = () => {
    return (
        <Container id="about">
            <Left>
                <Titles>Welcome to my portfolio website!</Titles>
                <Title>Hey folks, I'm <span style={{color:'var(--yellow)'}}>Web Developer</span></Title>
                <Desc>Building a successful product is a challenge. I am highly energetic in user experience design,
                     interfaces and web development.</Desc>
                <ButtonContainer>
                    <ButtonResume href={Pdf} download="Resume" >Download Resume <img style={{marginLeft:'5px'}} src={doc} alt='doc' /></ButtonResume>
                    <Button>Get a free quote</Button>
                </ButtonContainer>
            </Left>
            <Right>
                <Image src={svg} alt='img' />
            </Right>
        </Container>    
    )
}

export default About
