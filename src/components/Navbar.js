import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
const Container=styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
`
const Left=styled.div`
flex: 1;
display: flex;
margin-left: 1rem;
justify-content: flex-start;

`
const Lang=styled.span`
    font-size: 16px;
    cursor: pointer;
`
const SeContainer=styled.div`
    display: flex;
    margin-left: 0.5rem;
    border: 0.5px solid gray;
    border-radius: 5px;

`
const Seach=styled.input`
    border:none;
`


const Center=styled.h1`
flex: 1;
text-align: center;
`
const Right=styled.div`
flex: 1;
display: flex;
right: 2rem;
justify-content: flex-end;

`
const Singup=styled.h2`
font-size: 18px;
padding: 1rem;

`
const Register=styled.h2`
font-size: 18px;
padding: 1rem;

`


const Navbar = () => {
  return (
    <Container>
        <Left>
            <Lang>TH</Lang>
            <SeContainer>
                <Seach placeholder='ค้นหา'></Seach>
                <SearchIcon style={{color:"gray"}}/>
            </SeContainer>
        </Left>

        <Center>
            
                <Link to='/' style={{textDecoration: 'none'}}>
                    DEVGREENPINKSHOP
                </Link>
            
        </Center>
           
        <Right>
                <Singup>
                    <Link to='/Login' style={{textDecoration: 'none'}}>เข้าสู่ระบบ</Link>
                </Singup>
                
                <Register>
                    <Link to='/register' style={{textDecoration: 'none'}}>สมัครสมาชิก</Link>
                </Register>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon style={{padding:"2rem"}}/>
                </Badge>
                
        </Right>
    </Container>
  )
}

export default Navbar