import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled  from 'styled-components';
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import { mobile } from './../../BreakPoints';

const  Container = styled.div``

const  Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({flexDirection:'column', padding:'10px'})}

`
const  ImgContainer = styled.div`
flex: 1;`

const  Image = styled.img`
width:100%;
height: 90vh;
object-fit: cover;
${mobile({height:'75%'})}

`

const  InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
${mobile({padding:'10px'})}


`
const  Title = styled.h1`
font-weight: 200;`
const  Desc = styled.p`
margin: 20px 0;
`
const  Price = styled.span`
font-weight: 100;
font-size:40px;
`

const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
width: 40%;
margin: 30px 0;
${mobile({width:'100%'})}


`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;font-weight: 200;

`

const FilterColor = styled.div`
width: 20px;height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0 5px;
cursor: pointer;
`
const FilterSize = styled.select`

margin-left: 20px;`

const FilterSizeOption = styled.option``

const CartContainer = styled.div `
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({width:'100%'})}

`
const AmountContainer = styled.div `
display: flex;
align-items: center;

font-weight: 700;
`
const Amount = styled.span `
width: 30px;
height: 30px;
border-radius: 10px;
display: flex;
border: 1px solid teal;
justify-content: center;
align-items: center;
margin: 0 5px;
`
const Button = styled.button `
padding: 15px;
border: 1px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
&:hover {
    background-color: #f8f4f4;
}

`

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
            <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png'/>
            </ImgContainer>
            <InfoContainer>
                <Title> Denim Jum</Title>
                <Desc>
                There are two different types of settings files: The mappings file holds the information on how a sublime setting can be mapped to a VS Code setting. 
                The defaults file contains default Sublime settings that are not explicitly set in the Sublime settings file (e.g. the Monokai theme).
                </Desc>
                <Price> 20$</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='red' />
                        <FilterColor color='blue' />

                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>

                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <CartContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button> Add to cart</Button>
                </CartContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />


    </Container>
  )
}

export default Product