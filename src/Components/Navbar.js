import React,{useState} from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Toggle } from '../assets/Toggle.svg';
import { ReactComponent as Close } from '../assets/close.svg';




const Conatiner=styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    z-index: 1000;
    @media only screen and (max-width:580px){
        &{
            width:100vw;
            justify-content: space-around;
        }}
    ${mobile({
        background:'#fff',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'60px',
        alignItem:'center'
        })}
`
const Left=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    padding-left: 50px;
    ${mobile({paddingLeft:20})};
`
const TitleLogo=styled.h1`
    color: var(--dark);
    font-size: 25px;
    ${mobile({padding:"0",fontSize:22})};
`
const Center=styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 200px;
`
const List=styled.ul`
    display: flex;
    transition:all 300ms ease;
    
    ${mobile({
        position:'absolute',
        top:0,
        left:0,
        background:'#fff',
        width:'100%',
        height:'100vh',
        display: props=>props.open ? 'flex' : 'none',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    })}
`
const Item=styled.li`
    padding: 25px 30px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: all 300ms ease;
    &:hover{
        color:var(--yellow);
    }
`
const ToggleContainer=styled.div`
    display:none;
    flex: 1;
    ${mobile({display:"inline"})};
`


const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <Conatiner>
            <Left>
                
                <NavLink exact to="/" ><TitleLogo>Portfolio</TitleLogo></NavLink>
            </Left>
            <Center >
                <List id="menu" open={open}>
                    <Item><NavLink exact to="/" className='navlink' activeClassName='link-active' onClick={()=>{setOpen(false)}}>Home</NavLink></Item>
                    <Item><NavLink to="/about" className='navlink' activeClassName='link-active' onClick={()=>{setOpen(false)}}>About</NavLink></Item>
                    <Item><NavLink to="/projects" className='navlink' activeClassName='link-active' onClick={()=>{setOpen(false)}}>Projects</NavLink></Item>
                    <Item><NavLink to="/contact" className='navlink' activeClassName='link-active' onClick={()=>{setOpen(false)}}>Contact</NavLink></Item>
                </List>
            </Center>
            <ToggleContainer style={{padding:10,zIndex:100000}}>
               {open ? <Close  onClick={()=>{setOpen(false)}}/> : <Toggle  onClick={()=>{setOpen(true)}}/>} 
            </ToggleContainer>
        </Conatiner>
    )
}

export default Navbar
