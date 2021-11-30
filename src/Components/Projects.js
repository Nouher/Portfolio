import React from 'react'
import styled from 'styled-components'
import { ImageProjectData } from '../data'
import { mobile } from '../Responsive'

    
const Container=styled.div`
    ${mobile({width:"100vw"})};
    
`
const Title=styled.h1`
    color:var(--dark);
    font-size: 60px;
    margin:30px 0;
    text-align:center;
    ${mobile({fontSize:"30px"})};

`
const GridContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Grid=styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    ${mobile({gridTemplateColumns:"auto"})};


`
const GridItem=styled.div`
    transition: all 300ms ease;
    &:hover{
        transform: scale(1.1);
    }
`
const LinkProject=styled.a`
    font-size: 25px;
    text-decoration: none;
    font-weight: 600;
    color: var(--gray);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease;
    &:hover{
        color: var(--yellow);
    }
    ${mobile({fontSize:"20px"})};

`
const Image=styled.img`
    height: 300px;
    ${mobile({height:"200px"})};
    
`
const Infos=styled.div`
   
`

const Projects = () => {

    return (
        <Container id='project'>
            <Title>Projects</Title>
            <GridContainer>
                <Grid>
                    {ImageProjectData.map(item=>(
                        <GridItem>
                            <LinkProject href={item.link} target="_blank">
                                <Image src={item.url}/>
                                <Infos>{item.name}</Infos>
                            </LinkProject>
                        </GridItem>

                    ))}
                </Grid>
            </GridContainer>
        </Container>
    )
}

export default Projects
