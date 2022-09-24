import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import { addProduct } from "../../redux/cartRedux";
import { apiClient } from "./../../apiClient";
import { mobile } from "./../../BreakPoints";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "75%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 30px 0;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 20px;
`;

const FilterSizeOption = styled.option``;

const CartContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  border: 1px solid teal;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch()



  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await apiClient.get("/products/find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);
  const handleQuantity = (type) => {
    if(type === "dec") {
        quantity > 1 && setQuantity(quantity -1)
    }
    else {
        setQuantity(quantity + 1)
    }
  }
  const handleClickAdd = () => {
    dispatch(addProduct({...product, quantity, color, size}));
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((color) => (
                <FilterColor color={color} key={color} onClick={()=> setColor(color)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=> setSize(e.target.value)}>
                {product.size?.map((size) => (
                  <FilterSizeOption key={size}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <CartContainer>
            <AmountContainer>
              <Remove  onClick={()=>handleQuantity("dec")}/>
              <Amount>{ quantity}</Amount>
              <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClickAdd}> Add to cart</Button>
          </CartContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
