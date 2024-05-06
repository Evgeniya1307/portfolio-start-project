import React from "react";
import styled from "styled-components";
import photo from '../../../../assets/images/foto.jpg';
// @ts-ignore
import { FlexWrapper } from "../../../../components/FlexWrapper";


type PhotoPropsType ={
    src: string;
    alt: string;
}

// Main component definition using a functional React component
export const Main: React.FC = () => {
    return (
        <StyledMain>
           <FlexWrapper align={"center"} justify={"space-around"} direction={"row"}>
                <TextContainer>
                    <Greeting>Hi There</Greeting>
                    <Name>I am Evgeniya Staravoitava</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </TextContainer>
                <Photo src={photo} alt="Evgeniya Staravoitava" />
            </FlexWrapper>
        </StyledMain>
    );
}

// Styling for the main container
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #860949;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

// Styling for the Photo component
const Photo= styled.img<PhotoPropsType>`
    width: 350px;
    height: 430px;
    object-fit: cover;
    border-radius: 8px;  // Added border-radius for rounded corners
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Added shadow for depth
`;

// Additional styled components
const TextContainer = styled.div`
    text-align: left;
`;

const Greeting = styled.span`
    display: block;
    font-size: 1.2rem;
    color: #333;
`;

const Name = styled.h2`
    margin-top: 8px;
    font-size: 2rem;
    color: #222;
`;

const MainTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #e3e1ee;  // Example of a color that stands out
    margin-top: 12px;
`;