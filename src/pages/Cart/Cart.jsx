import React from "react";
import styled from "styled-components";
import Navbar from "./../../components/Navbar/Navbar";
import Announcement from "./../../components/Announcement/Announcement";

import Footer from "./../../components/Footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from './../../BreakPoints';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
${mobile({padding:'10px'})}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
${mobile({fontSize:'25px'})}
  
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
`;
const TopButton = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
${mobile({fontSize:'10px'})}

`;

const TopTexts = styled.div`
${mobile({display:'none'})}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
${mobile({flexDirection:'column'})}

`;

const Info = styled.span`
  flex: 3;
 
`;


const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:'column'})}

`;
const ProductDetail = styled.div`
display: flex;
flex: 2;
`;
const Image = styled.img`
width: 200px;
`;
const Details = styled.div`
padding: 20px;display:flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=> props.color};
`;

const ProductSize = styled.span`

`;
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;margin: 5px;
${mobile({margin:'5px 15px'})}

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:'20px'})}

`
const Summary = styled.span`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
font-weight: 200;

`

const SummaryItem = styled.div`
margin :30px 0;
display: flex;
justify-content:space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};

`

const SummaryItemPrice = styled.span``

const SummaryItemText = styled.span``

const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
text-transform: uppercase;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                </ProductAmountContainer>
                    <ProductPrice> $ 60 </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                </ProductAmountContainer>
                    <ProductPrice> $ 60 </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                </ProductAmountContainer>
                    <ProductPrice> $ 60 </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 60 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5 </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
                <SummaryItemText >Total</SummaryItemText>
                <SummaryItemPrice>$ 60 </SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
