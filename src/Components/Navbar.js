import React, { useState } from 'react'
import styled from 'styled-components'
import svgLogo from '../assets/userLogo.svg'
import { SocialMedia } from '../data'
import {Link} from 'react-scroll'
import { mobile } from '../Responsive'
import ListIcon from '../assets/Toggle.svg'
import closeIcon from '../assets/close.svg'



const Conatiner=styled.div`
    width: 100%;
    display: flex;
    height: 60px;
    background: var(--light);
    position: fixed;
    z-index: 1000;
    @media only screen and (max-width:580px){
        &{
            width:100vw;
            justify-content: space-around;

        }
        } 

`
const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const ImageLogo=styled.img`
    margin:0 10px 0 60px;
    ${mobile({padding:"0 0 0 20px",margin:"0"})};


`
const TitleLogo=styled.h1`
    font-size: 20px;
    ${mobile({padding:"10px 10px 10px 0"})};

`
const Center=styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const List=styled.ul`
    display: flex;
    transition:all 300ms ease;
        
    ${mobile({
        position:"absolute",
        flexDirection:"column",
        top:"60px",
        right:"0",
        width:"100vw",
        textAlign:"center",
        background:"#eee",
        height:"100vh",
        paddingTop:"40px"
    })};

`
const Item=styled.li`
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 300ms ease;
    &:hover{
        color:var(--yellow);
    }
`
const Right=styled.div`
    flex:1;
    display: flex;
    justify-content: end;
    align-items:center ;
    margin-right: 60px;
    ${mobile({margin:"0",justifyContent:"center"})};
    
`
const Image=styled.img`
  
`
const LinkMedia=styled.a`
    margin-right: 10px;
`
const Toggle=styled.div`
    display:none;
    flex: 1;
    ${mobile({display:"inline"})};
`
const InonImg=styled.img`
    height:70%;
    margin:10px 10px 10px 0;
`



const Navbar = () => {

     const [clicked,setClicked]=useState(false)

    return (
        <Conatiner>
            <Left>
                <ImageLogo src={svgLogo} alt='logo'/>
                <TitleLogo>Portfolio</TitleLogo>
            </Left>
            <Center >
                <List id="menu" style={{left:`${clicked  ? '0' : '-100%'}`}}>
                    <Item><Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={()=>{setClicked(!clicked)}}>About</Link></Item>
                    <Item><Link to="project" spy={true} smooth={true} offset={50} duration={500} onClick={()=>{setClicked(!clicked)}}>Project</Link></Item>
                    <Item><Link to="resume" spy={true} smooth={true} offset={50} duration={500} onClick={()=>{setClicked(!clicked)}}>Resume</Link></Item>
                    <Item><Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={()=>{setClicked(!clicked)}}>Contact</Link></Item>
                </List>
            </Center>
            <Right>
                {SocialMedia.map(item=>(
                    <LinkMedia href={item.link} target="_blank">
                        <Image src={item.logo}/>
                    </LinkMedia>
                ))}
            </Right>
            <Toggle onClick={()=>{setClicked(!clicked)}}><InonImg src={`${clicked ? closeIcon : ListIcon}`} alt='toggle'/></Toggle>
        </Conatiner>
    )
}

export default Navbar
