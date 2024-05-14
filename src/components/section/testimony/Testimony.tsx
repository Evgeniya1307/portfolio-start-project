import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../SectionTitle";
import { Icon } from "../../../layout/icon/Icon";
import { Slider } from "../../slider/Slider";
import { FlexWrapper } from "../../FlexWrapper";
import { IconWrapper } from "../main/skils/skil/Skil";
import { Container } from "../../Container";


export const Testimony =()=>{
    return(
        <StyledTestimony>
            <Container>
            <FlexWrapper direction={'column'} align={'center'}>
<IconWrapper>
    <Icon iconId={'quote'}/>
    </IconWrapper>
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
   
    ${IconWrapper} {
margin: 40px 0 72px;
    }

`