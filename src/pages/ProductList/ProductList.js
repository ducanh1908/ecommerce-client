import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer';

import { red } from '@mui/material/colors';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { mobile } from './../../BreakPoints';
import Announcement from './../../components/Announcement/Announcement';
import Navbar from './../../components/Navbar/Navbar';
import Newletter from './../../components/Newsletter/Newsletter';
import Products from './../../components/Products/Products';
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
const ProductList = () => {
  
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest")
const handleFilter = (e)=>{
  const value = e.target.value
  setFilters({
    ...filters,
    [e.target.name]:value,
  })

}

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat} </Title>
     <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
      <Select name='color' onChange={handleFilter}>
        <Option disabled > Color</Option>
        <Option>White</Option>
        <Option>Blue</Option>
        <Option>Gray</Option>
        <Option>Pink</Option>
        <Option>Black</Option>

      </Select>
      <Select name='size' onChange={handleFilter}>
        <Option disabled > Size</Option>
        <Option>XL</Option>
        <Option>M</Option>
        <Option>S</Option>
        <Option>L</Option>
      </Select>
      </Filter>
      <Filter>
        <FilterText>Filter Sort:</FilterText>
        <Select onChange={e => setSort(e.target.value)}>
        <Option value="newest"> Newest</Option>
        <Option value="asc">Price(Asc)</Option>
        <Option value="desc">Price(Desc)</Option>
      </Select>
      </Filter>

     </FilterContainer>
     <Products cat = {cat} filters= {filters}  sort={sort}/>
     <Newletter />
     <Footer />
    </Container>
  )
}

export default ProductList