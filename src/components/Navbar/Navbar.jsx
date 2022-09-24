import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import React from "react";
import styled from "styled-components";
import { mobile } from './../../BreakPoints';
import {useSelector} from 'react-redux'
const Container = styled.div`
  height: 60px;
  ${mobile({height:'50px'})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding:'10px 0'})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-top: 5px;
  ${mobile({display:'none'})}

`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  /* width: 50%; */
`;
const Input = styled.input`
  border: none;
  color: gray;
  outline: none;
  ${mobile({width:'50px'})}

`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-transform:uppercase;
  ${mobile({fontSize:'22px'})}

`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({flex:2,justifyContent:'center'})}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-transform: uppercase;
  ${mobile({fontSize:'12px', marginLeft: '10px'})}
`;

const Navbar = () => {
  
  const quantity = useSelector(state=> state.cart)
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input  placeholder="search"/>
            <SearchIcon style={{color:'gray', fontSize:'16', cursor:'pointer'}} />
          </SearchContainer>
        </Left>
        <Center>
          
          <Logo>YongLee.</Logo>
         
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon />        
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
