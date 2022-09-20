import React, { useState } from "react";
import styled from "styled-components";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
    overflow: hidden;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e8dada;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  cursor: pointer;
  margin: auto;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.55s ease;
  transform: translateX( ${props => props.slideIndex *-100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const Title = styled.h1`
  font-size: 72px;
    text-transform: uppercase;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;

`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  text-transform: uppercase;

  cursor: pointer;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
            console.log(sliderItems);

        }
        else {
            setSlideIndex(sliderItems < 2 ? slideIndex + 1 : 0)
            console.log(sliderItems);
        }
    }
  return (
    <Container>
      <Arrow direction="left" onClick={()=> handleClick('left')}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
            sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                  <Image src={item.img} />
                </ImageContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>
                    {item.desc}        
                  </Desc>
                  <Button> Show now</Button>
                </InfoContainer>
              </Slide>
            ))
        }
        
      </Wrapper>
      <Arrow direction="right" onClick={()=> handleClick('right')}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
