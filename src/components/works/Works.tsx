import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { Menu } from "../logo/menu/Menu";
import { FlexWrapper } from "../FlexWrapper";
import { Work } from "./work/Work";
import socialImg from '../../assets/images/proj-1.png'
import timerimg from '../../assets/images/proj-2.png'


const WorksItems = ['All','LANDING PAGE','REACT','SPA']


export const Works = ()=>{
    return(
<StyledWork>
<SectionTitle>My Works</SectionTitle>
<Menu menuItems={WorksItems}/>
<FlexWrapper justify={'space-around'}>
<Work  title={'Social Network'}
src={socialImg}
alt={'Social Network Image Alt'}
text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>

<Work title={'Timer'}
src={timerimg}
alt={'Timer Image Alt'}
text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>


</FlexWrapper>

</StyledWork>

    )
}


const StyledWork = styled.section`
    min-height: 100vh;
    background-color:#a9c0cf
`