
import React from "react"
import styled from "styled-components"
import { SectionTitle } from "../../SectionTitle"
import { Button } from "../../Button"


export const Slogan=()=>{
    return(
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
        <Button type={'button'}>Hire me</Button>
        </StyledSlogan>
    )
}


const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #c7d4df;
`
