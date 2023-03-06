import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Container=styled.div`

width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-left:0.5rem;

`
const Left=styled.div`
    flex: 1;
    padding: 0 1rem 0 1rem ;
`
const Title=styled.h1`
`
const Content=styled.p`
text-align: justify;
  text-justify: inter-word;
`
const Icon=styled.div`
display: flex;
margin-left: 2rem;
flex-wrap: nowrap;

`
const IconSec=styled.div`

 margin-right: 20px;
`

const Center=styled.div`
flex: 1;
`
const ULink=styled.h2`

`
const LinkSection=styled.div`
display: flex;
`
const Llink=styled.div`
flex: 1;
`
const Clink=styled.div`
`
const Rlink=styled.div`
flex: 1;
`

const Right=styled.div`
flex: 1;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>DEVGREENPINKSHOP.</Title>
            <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ad voluptatibus nobis, aliquam dicta odit, sint minus veniam in fugiat quae magnam hic mollitia repellendus consectetur quia aspernatur aliquid atque?</Content>
            <Icon>
                <IconSec>
                    <FacebookIcon/>
                </IconSec>

                <IconSec>
                    <InstagramIcon/>
                    
                </IconSec>
                <IconSec>
                    <YouTubeIcon/>
                    
                </IconSec>
                
                
            </Icon>
        </Left>
        <Center>
            <ULink>UseFul Links</ULink>
            <LinkSection>
                <Llink>
                    <Clink>Home</Clink>
                    <Clink>Main</Clink>
                    <Clink>Accessories</Clink>
                    <Clink>Order Tracking</Clink>
                    <Clink>Wishhist</Clink>
                </Llink>
                <Rlink>
                    <Clink>Home</Clink>
                    <Clink>Main</Clink>
                    <Clink>Accessories</Clink>
                    <Clink>Order Tracking</Clink>
                    <Clink>Wishhist</Clink>
                </Rlink>
            </LinkSection>
        </Center>
        <Right>
            <h1>Contact</h1>
            <p>Address:</p>
            <p>Email:</p>
            <p>Tel Number:</p>
        </Right>

    </Container>
  )
}

export default Footer