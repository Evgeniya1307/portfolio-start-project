import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/foto.jpg';
// @ts-ignore
import { FlexWrapper } from "../../FlexWrapper";
import { Container } from "../../Container";


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
                    <Name>I am Evgeniya Staravoitava</Name>
                    <MainTitle>A Web Developer</MainTitle>
                    </div>
                <Photo src={photo} alt="Evgeniya Staravoitava" />
            </FlexWrapper>
            </Container>
           
        </StyledMain>
    );
}

// Styling for the main container
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #364338;
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
    box-shadow: 0 4px 8px rgba(246, 244, 244, 0.1);  // Added shadow for depth
`;

const MainTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #e4e2ee;  // Example of a color that stands out
    margin-top: 12px;
`;


const Name = styled.h2`
    margin-top: 8px;
    font-size: 2rem;
    color: #f1ecec;
`;

const SmallText = styled.h2`
    
    
`