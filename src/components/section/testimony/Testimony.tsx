import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Icon } from "../../../layout/icon/Icon";
import { Slider } from "../../slider/Slider";
import { FlexWrapper } from "../../FlexWrapper";
//import { IconWrapper } from "../main/skils/Skills_Style";
import { Container } from "../../Container";
import { S } from "../main/skils/Skills_Style";

export const Testimony: React.FC =()=>{
    return(
        <StyledTestimony>
            <Container>
            <FlexWrapper direction={'column'} align={'center'}>
<S.IconWrapper>
    <Icon iconId={'quote'}/>
    </S.IconWrapper>
<Slider/>
</FlexWrapper>
            </Container>
            <SectionTitle>Testimony</SectionTitle>
        </StyledTestimony>
    )
}


const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color:#656cf187;
   
    ${S.IconWrapper} {
margin: 40px 0 72px;
    }

`