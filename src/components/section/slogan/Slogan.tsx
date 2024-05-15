
import React from "react"
import styled from "styled-components"
import { SectionTitle } from "../../SectionTitle"
import { Button } from "../../Button"
import { Container } from "../../Container"
import { FlexWrapper } from "../../FlexWrapper"


export const Slogan:React.FC =()=>{
    return(
        <StyledSlogan>
            <Container>
               <FlexWrapper direction={'column'} align={'center'}>
               <SectionTitle>I Am Available For Freelance</SectionTitle>
        <Button type={'button'}>Hire me</Button>
                </FlexWrapper> 
            </Container>
           
        </StyledSlogan>
    )
}


const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #ffe1f5;
`
