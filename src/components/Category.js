import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { Categories } from '../data/Categories'
const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Category = () => {
  return (
    <Container>
       
        {Categories.map(item=>(
            <CategoryItem props={item} key={item.id}/>
            
        ))}
    </Container>
  )
}

export default Category