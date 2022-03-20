import React from 'react'
import styled from 'styled-components'
import profile from '../assets/VectorProfile.png'
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
        overflow:'hidden'
        })};
    

`
const Left=styled.div`
    flex: 1;
    padding:0 60px 0 70px ;
    z-index: 10;
    ${mobile({margin:"10px 0 50px 0",padding:'0',order:2})};
`
const Right=styled.div`
    flex: 1;
    ${mobile({order:1,padding:0})};

`
const Titles=styled.h2`
    font-size: 16px;
    color:var(--gray);
    margin:0 0 30px 20px;
    ${mobile({margin:"0",fontSize:12,textAlign:"center",marginBottom:"30px"})};

    


`
const Title=styled.h1`
    font-size: 45px;
    margin-bottom: 20px;
    ${mobile({fontSize:"34px",textAlign:"center"})};
    

`
const Image=styled.img`
    height: 650px;
    ${mobile({height:"470px"})};

`
const Desc=styled.p`
    font-size: 22px;
    font-weight: 500;
    color: var(--gray-dark);
    margin-bottom: 20px;
    ${mobile({fontSize:16,padding:" 0 30px",textAlign:"center"})};


`
const ButtonContainer=styled.div`
    display: flex;
    
    ${mobile({flexDirection:"column",alignItems: "center",marginTop:"20px"})};

`
const ButtonResume=styled.a`
    text-decoration: none;
    background: #DDDFCD;
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
        background-color: #C1DF00;
        color: var(--dark);
    }
    ${mobile({width:"50%",marginBottom:"10px",marginRight:"0"})};

    
`

const ButtonLink=styled.a`
    padding:10px 30px;
    margin-Right:20px ;
    border: none;
    border-radius:25px;
    font-size: 16px;
    font-weight: 600;
    color:#DFFE1C;
    text-decoration: none;
    background-color: var(--dark);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms ease;
    
    &:hover{
        background: #DFFE1C;
        color: var(--dark);
    }
    ${mobile({width:'60%',background:'transparent',color:'#343a40'})};

`
const Circle=styled.div`
    background: #C1DF00;
    border-radius:50%;
    bottom:0;
    left: 0;
    z-index: 0;
    position: absolute;
    width: 400px;
    height: 400px;
    mix-blend-mode: multiply;
    filter:blur(100px);
    opacity: .5;
    animation: circle-1 30s infinite;
    ${mobile({display:'none'})};

`

const About = () => {
    return (
        <Container id="about">
                <Circle/>
            <Left>
                <Titles>Welcome to my portfolio website!</Titles>
                {/* <Title>Hi, I'm Web Developer</span></Title> */}
                <Title>Hi, my name is <span style={{color:'#C1DF00'}}>Hamza</span></Title>
                <Desc>I'm a freelance Web Developer && Designer with a markting background specializing in React</Desc>
                <ButtonContainer>
                    <ButtonResume href={Pdf} download="Resume" >Download CV <img style={{marginLeft:'5px'}} src={doc} alt='doc' /></ButtonResume>
                    <ButtonLink href='https://www.linkedin.com/in/hamza-nouher-839b08201/' target='_blank'>Visit may profile in Linkedin</ButtonLink>
                </ButtonContainer>
            </Left>
            <Right>
                <Image src={profile} alt='profile' />
            </Right>
        </Container>    
    )
}

export default About
