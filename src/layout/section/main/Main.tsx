import React from "react";
import styled from "styled-components";
import photo from '../../../../assets/images/foto.jpg';
// @ts-ignore
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { thema } from "../../../styles/Thema";


type PhotoPropsType = {
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
                        <Name>I am <span>Evgeniya Staravoitava</span></Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </div>

                    <PhotoWrapper>
                    <Photo src={photo} alt="Evgeniya Staravoitava" />
                    </PhotoWrapper>   
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
}

// Styling for the main container
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff5e7;
    display: flex;
`;


const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content:'';
        width: 360px;
        height: 470px;
        border: 5px solid ${thema.colors.accent} ;
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;//за элемент положить
    }
`

// Styling for the Photo component
const Photo = styled.img<PhotoPropsType>`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-weight:400;
    font-size:27px;
`;

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 10px 0;

span{
position: relative;//'эл которого относительно позиционирую
z-index: 0;   
&::before {
        content: '';
    display: inline-block;
    width:100%;
    height: 20px;
    background-color:${thema.colors.accent};
    
    position: absolute;//эл который позиционирую
    bottom: 0;//прижала к низу
    z-index: -1;//за родителя эл
}
}
`;

const SmallText = styled.h2`
    font-weight:400;
    font-size: 14px;
`