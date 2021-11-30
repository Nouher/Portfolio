import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com';
import { mobile } from '../Responsive';


const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    height: 100vh;
    ${mobile({width:"100vw",height:"auto",flexDirection:"column",marginTop:"70px"})};

`
const Informations=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({marginBottom:"50px"})};
   


`
const Mapouter=styled.div`
   /* position:relative; */
   text-align:center;
   height:300px;
   width:400px;
   ${mobile({height:"300px",width:"80vw"})};
   
`
const Gmapcanvas=styled.div`
    overflow:hidden;
    background:none!important;
    height:300px;
    width:400px;
   ${mobile({height:"300px",width:"80vw"})};
`
const Infos=styled.div`
    box-sizing:border-box;
    width:400px;
    text-align: start;
    padding:30px;
    background: #474559;
   ${mobile({width:"80vw"})};


`
const InfosItem=styled.h3`
    font-size: 22px;
    font-weight:500;
    color:#fff;
    margin-top:10px;
`
const MessageForm=styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`
const Title=styled.div`
    color: #353535;
    font-size: 2.4em;
    font-weight: bold;
    margin-bottom: 1.5rem!important;
    letter-spacing: -1px;
    line-height: 1.2;
    max-width:550px;
    ${mobile({fontSize:"20px",textAlign:"center"})};

`
const MessageItem=styled.div`
    
    width:500px;
    display:flex;
    ${mobile({flexDirection:"column",alignItems:"center",width:"auto"})};

`
const Input=styled.input`
    margin: 16px 0;
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
        border: 1px solid #ffc200;
    }
    ${mobile({width:"80vw",margin:"10px 0"})};


`
const Textarea=styled.textarea`
    display: block;
    width:500px;
    height: 190px;
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
        border: 1px solid #ffc200;
    }
    ${mobile({width:"80vw",marginTop:"10px"})};

`
const Button=styled.button`
    height: 48px;
    width: 150px;
    background: #ffc200;
    border-radius: 50px;
    color: #ffffff;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    transition: all 0.4s ease;
    margin-top: 10px;
    &:hover{
        background: var(--dark);
    }
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
            <Informations>
                <Mapouter>
                    <Gmapcanvas class="gmap_canvas">
                        <iframe title='location' width="400" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=mohamadia%20maroc&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </Gmapcanvas>
                </Mapouter>
                <Infos>
                    <InfosItem>Mohammedia, Morocco</InfosItem>
                    <InfosItem>+212684009463</InfosItem>
                    <InfosItem>nouhirh@gmail.com</InfosItem>
                </Infos>
            </Informations>
            <MessageForm ref={formRef} onSubmit={handleSubmit}>
                <Title>Interested to work together? Let's talk</Title>
                <MessageItem >
                    <Input type="text" placeholder='Name' name='user_name' onChange={(e)=>setName(e.target.value)}/>
                    <Input type="text" placeholder='Email' name='user_mail' onChange={(e)=>setEmail(e.target.value)}/>
                </MessageItem>
                <MessageItem><Textarea row='6' placeholder='Message' name='message' onChange={(e)=>setMessage(e.target.value)}></Textarea></MessageItem>
                <MessageItem style={{display:"flex",flexDirection:"column"}}>
                    <Button>Send Button</Button>
                    {done && 'Thank You ...'}
                </MessageItem>

            </MessageForm>
        </Container>
    )
}

export default Contact
