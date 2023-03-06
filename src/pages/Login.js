
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
const Container=styled.div`
    width: 100%;
    height: 100vh;
   background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);;
    display: flex;
    justify-content: center;
    align-items: center;


`
const Wrapper=styled.div`
width: 40%;
background-color: white;
padding: 1rem;
border-radius: 10px;
`
const Form=styled.form`
    
`
const Title=styled.h1`
font-size: 20px;
text-align: center;
`
const Input=styled.input`
width: 90%;
height: 20px;
padding: 0.5rem;
margin-bottom:1rem ;

`

const Button=styled.button`
    width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #C1E1C1;
  color: black;
  cursor: pointer;
`

const Login = () => {
  return (
    <div>
         <Navbar/>
         <Container>
        <Wrapper>
            <Title>สร้างบัญชีของคุณ</Title>
            <Form>
                    <Input placeholder='ชื่อ'></Input>
                    <Input placeholder='นามสกุล.'></Input>
                    <Button>สร้างบัญชี</Button>
            </Form>
           
        </Wrapper>

    </Container>
    </div>
    
  )
}

export default Login