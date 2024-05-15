import React from "react";
import photo from '../../../assets/images/foto.jpg';
// @ts-ignore
import { FlexWrapper } from "../../FlexWrapper";
import { Container } from "../../Container";
import { S } from "./Main_Styles";


// Main component definition using a functional React component
export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                    <S.SmallText>Hi There</S.SmallText>
                    <S.Name>I am Evgeniya Staravoitava</S.Name>
                    <S.MainTitle>A Web Developer</S.MainTitle>
                    </div>
                <S.Photo src={photo} alt="Evgeniya Staravoitava" />
            </FlexWrapper>
            </Container>
           
        </S.Main>
    );
}

