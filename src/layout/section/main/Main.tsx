import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/foto.jpg';
// @ts-ignore
import { FlexWrapper } from "../../FlexWrapper";
import { Container } from "../../../components/Container";
import { thema } from "../../../styles/Thema";


type PhotoPropsType ={
    src: string;
    alt: string;
}

// Main component definition using a functional React component
export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                    <SmallText>Hi There</SmallText>
                    <Name>I am <span>Evgeniya Staravoitava</span>Evgeniya Staravoitava</Name>
                    <MainTitle>A Web Developer</MainTitle>
                    </div>
                    
                    <PhotoWrapper> <Photo src={photo} alt="Evgeniya Staravoitava" /></PhotoWrapper>
               
            </FlexWrapper>
            </Container>
           
        </StyledMain>
    );
}

// Styling for the main container
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #364338;
    display: flex;
`;


const PhotoWrapper = styled.div`
    position:relative;
    z-index: 0;
  
    &::before{
       content: '';
       width: 360px;
       height: 470px;
       border: 5px solid red;

       position: absolute;
       top: -24px;
       left: 24px;
       z-index: -1;
    }
`

// Styling for the Photo component
const Photo= styled.img<PhotoPropsType>`
    width: 350px;
    height: 430px;
    object-fit: cover;
`;

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight:400;
`;

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
   font-weight:700;
    font-size: 50px;
   letter-spacing: 0.05em;
   margin: 10px 0;

   span{
position: relative;
z-index: 0;

    &::before{
        content: "";
        display:inline-block;
        width: 100%;
        height: 20px;
        background-color: ${thema.colors.accent};
    
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
   }
`

const SmallText = styled.h2`
    font-weight:400;
    font-size:14px;
`