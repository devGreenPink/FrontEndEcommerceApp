import React from 'react'
import styled from 'styled-components'
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
const Container=styled.div`
    
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #fcf5f5;
`
const ArrowLeft=styled.div`
    width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const ArrowRight=styled.div`
    width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 20px;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const ContentContainer=styled.div`
display: flex;

`
const ImageSection=styled.img`

`
const Content=styled.div`
display: flex;
flex-direction: column;
margin-left: 2rem;
justify-content: center;
`
const Button=styled.button`
    padding: 10px;
    font-size: 20px;
    font-weight: 400;
    width: 20%;
    cursor: pointer;

`
const Swiper = () => {
  return (
    <Container>
        <ArrowLeft>
            <KeyboardDoubleArrowLeftOutlinedIcon/>
        </ArrowLeft>

        <ContentContainer>
            <ImageSection src='https://image.uniqlo.com/UQ/ST3/th/imagesgoods/455969/item/thgoods_09_455969.jpg?width=750'></ImageSection>
            <Content>
                <h1>เสื้อเชิ้ต ผ้าคอตตอน Modal คอเปิด แขนสั้น</h1>
                <h2>เนื้อผ้าให้สัมผัสสบายทิ้งตัวสวย ทรงหลวมเหมาะกับใส่เป็นเสื้อตัวนอกสไตล์เบาๆ</h2>
                <Button>แสดงข้อมูล</Button>
            </Content>
        </ContentContainer>
        
        <ArrowRight>
            <KeyboardDoubleArrowRightOutlinedIcon/>
        </ArrowRight>
    </Container>
  )
}

export default Swiper