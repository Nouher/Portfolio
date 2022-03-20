import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';
import { mobile } from '../Responsive';
import { ReactComponent as Svglocation } from '../assets/location.svg';
import { ReactComponent as Svgphone } from '../assets/phone.svg';
import { ReactComponent as Svgmail } from '../assets/email.svg';
import Footer from '../Components/Footer';


const Container=styled.div`
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-items: center;
    padding-top:100px ;
    width: 100%;
    ${mobile({width:"100vw",height:"auto",flexDirection:"column",marginTop:"70px"})};

`
const Maps=styled.div`
   border-radius:.5rem ;
   overflow: hidden;
   border: 10px solid #C1DF66;
   width: 40%;
   ${mobile({width:'85%',marginTop:70,border:'3px solid #C1DF66',height:300})}


`
const Infos=styled.div`
    display: flex;
    width:100% ;
    justify-content: space-evenly;
   ${mobile({width:"80vw",flexDirection:'column',gap:50})};
   margin: 60px 0 ;


`
const InfosItem=styled.h3`
    font-size: 22px;
    font-weight:500;
    color:#000;
    margin-top:10px;
    display: flex;
    flex-direction:column ;
    align-items: center;
    ${mobile({fontSize:16})}
`
const MessageForm=styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    
`
const Title=styled.div`
    color: #353535;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 1.5rem!important;
    letter-spacing: -1px;
    line-height: 1.2;
    max-width:550px;
    ${mobile({fontSize:"20px",textAlign:"center"})};

`
const Input=styled.input`
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:hover{
        border: 1px solid #C1DF00;
    }
    ${mobile({width:"80vw",margin:"10px 0"})};


`
const Textarea=styled.textarea`
    display: block;
    width:100%;
    height: 100px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:hover{
        border: 1px solid #C1DF00;
    }
    ${mobile({width:"80vw",marginTop:"10px"})};

`
const Button=styled.button`
    align-self: flex-start;
    height: 48px;
    width: 50%;
    background: #C1DF00;
    border-radius: .25rem;
    color: #ffffff;
    font-size:18px;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover{
        background: #9AB200;
    }
    ${mobile({alignSelf:'center',marginTop:20})};
    
`
const Div=styled.div`
    display:flex;
    width:100%;
    justify-content:space-evenly;
    height:400px;
    ${mobile({flexDirection:'column',height:'auto',alignItems:'center'})};

`

const Contact = () => {

    const formRef=useRef();
    const [done,setDone]=useState(false);

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name && email && message){

            emailjs.sendForm('service_95z170f', 'template_brbgrq4', formRef.current, 'user_CtdJttLzCtVwspeFiPVG3')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
            alert('Message has been sent')
        }else
        alert('Please fill in the information');
    }


    return (
        <Container id='contact'>
            <Div >
                <MessageForm ref={formRef} onSubmit={handleSubmit}>
                    <Title>Interested to work together? Let's talk</Title>
                        <Input type="text" placeholder='Name' name='user_name' onChange={(e)=>setName(e.target.value)}/>
                        <Input type="text" placeholder='Email' name='user_mail' onChange={(e)=>setEmail(e.target.value)}/>
                        <Textarea row='6' placeholder='Message' name='message' onChange={(e)=>setMessage(e.target.value)}></Textarea>
                        <Button>Send</Button>
                        {done && 'Thank You ...'}
                </MessageForm>
                <Maps>
                    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d212471.42585160816!2d-7.388011!3d33.686533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b65541dc9c3d%3A0x89fe602f8927da05!2sMohamm%C3%A9dia%2C%20Maroc!5e0!3m2!1sfr!2sus!4v1646571085071!5m2!1sfr!2sus" style={{width:'100%',height:'100%',border:'none'}}  allowfullscreen="" loading="lazy"></iframe>
                </Maps>
            </Div>
            <Infos>
                    <InfosItem>
                        <Svglocation/>
                        <span style={{color:'#555'}}>Mohammedia, Morocco</span>
                    </InfosItem>
                    <InfosItem>
                        <Svgphone/>
                        <span style={{color:'#555'}}>+212684009463</span>
                    </InfosItem>
                    <InfosItem>
                        <Svgmail/>
                        <span style={{color:'#555'}}>nouhirh@gmail.com</span>
                    </InfosItem>
            </Infos>
            <Footer/>
        </Container>
    )
}

export default Contact
