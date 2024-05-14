import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../SectionTitle";
import { FlexWrapper } from "../FlexWrapper";
import { Work } from "./work/Work";
import socialImg from '../../assets/images/proj-1.png'
import timerimg from '../../assets/images/proj-2.png'
import { Container } from "../Container";
import { TabMenu } from "./tabMenu/TabMenu";


const WorksItems = ['All','LANDING PAGE','REACT','SPA']


export const Works = ()=>{
    return(
<StyledWork>
    <Container>
        <SectionTitle>My Works</SectionTitle>
<TabMenu menuItems={WorksItems}/>
<FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
<Work  title={'Social Network'}
src={socialImg}
alt={'Social Network Image Alt'}
text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>

<Work title={'Timer'}
src={timerimg}
alt={'Timer Image Alt'}
text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
</FlexWrapper>
</Container>
</StyledWork>

    )
}


const StyledWork = styled.section`
    ${FlexWrapper}{
        gap:30px;
        
    }
`