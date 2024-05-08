import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../FlexWrapper";
import { SectionTitle } from "../../../SectionTitle";
import { Skil } from "./skil/Skil";
import { Container } from "../../../Container";




export const Skils =()=>{
    return(
<StyledSkils>
<Container>
<SectionTitle>My Skills</SectionTitle>
<FlexWrapper wrap={'wrap'} justify={'space-between'}>

<Skil iconId={'codeSvg'}title={'HTML5'}
description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

<Skil iconId={'css'}title={'CSS3'}
description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

<Skil iconId={'react'}title={'REACT'}
description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
   
   <Skil iconId={'styled'}title={'STYLED COMPONENTS'}
description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
   
   <Skil iconId={'typescript'}title={'TYPESCRIPT'}
description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
   
   <Skil iconId={'web'}title={'WEB DESIGN  '}
description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
    </FlexWrapper>
</Container>
    </StyledSkils>

    )
}


const StyledSkils=styled.section`
   min-height: 100vh;
`