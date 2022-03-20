import React from 'react'
import styled from 'styled-components'
import { ImageProjectData } from '../data'
import { mobile } from '../Responsive'
import Footer from '../Components/Footer';

    
const Container=styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    height: 100vh;
    
    ${mobile({gridTemplateColumns:'repeat(1,1fr)',paddingTop:100})};
    
`
const ProjectContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({paddingBottom:30})};

`
const Title=styled.h1`
 text-align: center;
 font-size: 18px;
`
const Image=styled.img`
    height: 250px;
`
const Link=styled.a`
   color: #555;
   text-decoration: none;
   font-weight: bold;
   font-size: 18px;
`


const Projects = () => {

    return (
        <Container>
            {ImageProjectData.map(item=>(
                <ProjectContainer>
                    <Title>{item.name}</Title>
                    <Image src={item.url}></Image>
                    <Link href={item.link} target='_blank'>View Project</Link>
                </ProjectContainer>
            ))}
        </Container>
    )
}

export default Projects
