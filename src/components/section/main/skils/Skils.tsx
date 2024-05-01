import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../FlexWrapper";
import { Icon } from "../../../../layout/header/icon/Icon";
import { SectionTitle } from "../../../SectionTitle";
import { Skil } from "./skil/Skil";




export const Skils =()=>{
    return(
<StyledSkils>
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
    </StyledSkils>

    )
}


const StyledSkils=styled.section`
   background-color:#3c4c36;
   min-height: 100vh;
`