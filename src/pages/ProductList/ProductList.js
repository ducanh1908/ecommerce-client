import React from 'react'
import  styled  from 'styled-components';
import Footer from '../../components/Footer/Footer';

import Announcement from './../../components/Announcement/Announcement'
import Navbar from './../../components/Navbar/Navbar';
import Newletter from './../../components/Newsletter/Newsletter';
import Products from './../../components/Products/Products';
import { mobile } from './../../BreakPoints';

const ProductList = () => {
    const Container = styled.div`
    `

    const Title = styled.h1`
    margin: 20px;
    `
    const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    `
    const Filter = styled.div`
    margin: 20px;
${mobile({width:'0px 20px', display:'flex', flexDirection:'column'})}

    `
    const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
${mobile({marginRight:'0px'})}

    `
    const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
${mobile({margin:'10px 0px'})}

    
    `
    const Option = styled.option`
    `
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses </Title>
     <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
      <Select>
        <Option disabled selected> Color</Option>
        <Option>White</Option>
        <Option>Blue</Option>
        <Option>Gray</Option>
        <Option>Pink</Option>

      </Select>
      <Select>
        <Option disabled selected> Size</Option>
        <Option>XL</Option>
        <Option>M</Option>
        <Option>S</Option>
        <Option>L</Option>

      </Select>
      
      </Filter>
      <Filter>
        <FilterText>Filter Sort:</FilterText>
        <Select>
        <Option disabled selected> Newest</Option>
        <Option>Price(Asc)</Option>
        <Option>Price(Desc)</Option>
       

      </Select>
      </Filter>

     </FilterContainer>
     <Products />
     <Newletter />
     <Footer />
    </Container>
  )
}

export default ProductList