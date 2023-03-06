
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
    display: flex;
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
const Left=styled.div`
width: 50%;
`
const Right=styled.div`
width: 50%;
`
const Button=styled.button`
    width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #C1E1C1;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    <div>
         <Navbar/>
         <Container>
        <Wrapper>
            <Title>สร้างบัญชีของคุณ</Title>
            <Form>
                <Left>
                    <Input placeholder='ชื่อ'></Input>
                    <Input placeholder='อีเมล'></Input>
                    <Input placeholder='รหัสผ่าน'></Input>
                </Left>
                <Right>
                    <Input placeholder='นามสกุล.'></Input>
                    <Input placeholder='เบอร์โทร'></Input>
                    <Input placeholder='ยืนยันรหัสผ่าน'></Input>
                </Right>
                
            </Form>
            <Button>สร้างบัญชี</Button>
        </Wrapper>

    </Container>
    </div>
    
  )
}

export default Register