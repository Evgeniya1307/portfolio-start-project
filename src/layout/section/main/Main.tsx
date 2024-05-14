import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/foto.jpg';
// @ts-ignore
import { FlexWrapper } from "../../FlexWrapper";
import { Container } from "../../../components/Container";
import { thema } from "../../../styles/Thema";
import { font } from "../../../styles/Common";

type PhotoPropsType ={
    src: string;
    alt: string;
}

// Main component definition using a functional React component
export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"} wrap = {'wrap'}>
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
    margin-top: 65px;
  
    &::before{
       content: '';
       width: 360px;
       height: 470px;
       border: 5px solid ${thema.colors.accent};

       position: absolute;
       top: -24px;
       left: 24px;
       z-index: -1;

       @media ${thema.media.mobile}{
        width: 314px;
        height: 414px;
        top: -17px;
        left: 20px;

       }
    }
`

// Styling for the Photo component
const Photo= styled.img<PhotoPropsType>`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${thema.media.mobile} {
        width: 310px;
        height: 380px;
    }
`;

const MainTitle = styled.h1`
    /* font-size: 27px;
    font-weight:400; */
    ${font({weight:400,Fmax:27,Fmin:20})}
`;

const Name = styled.h2`
${font({ family: 'Josefin Sans', weight: 700, Fmax: 50, Fmin: 36 })}
    // font-family: 'Josefin Sans', sans-serif;
    // font-weight:700;
    // font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

   span{
position: relative;
z-index: 0;
white-space: nowrap;//текст по словам не переносить

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
@media ${thema.media.mobile} {
    margin: 15px 0 22px;
}

`

const SmallText = styled.h2`
    font-weight:400;
    font-size:14px;
`