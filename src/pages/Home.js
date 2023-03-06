import React from 'react'
import Navbar from '../components/Navbar'
import Swiper from '../components/Swiper'
import styled from 'styled-components'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const MainContainer=styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

const Home = () => {
  return (
    <MainContainer>
       <Navbar/>
       <Swiper/>
       <Category/>
       <Newsletter/>
       <Footer/>
    </MainContainer>
  )
}

export default Home