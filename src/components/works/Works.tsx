import React, { useState } from "react";
import { SectionTitle } from "../SectionTitle";
import { FlexWrapper } from "../FlexWrapper";
import { Work } from "./work/Work";
import socialImg from '../../assets/images/proj-1.png'
import timerimg from '../../assets/images/proj-2.png'
import { Container } from "../Container";
import { S } from "./Works_Styles";
import TabMenu from "./tabMenu/TabMenu";
import { TabsStatusType } from "./tabMenu/TabMenu";

const tabsItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: 'All',
        status: 'all',
    },
    {
        title: 'Landing Page',
        status: 'landing',
    },
    {
        title: 'React',
        status: 'react',
    },
    {
        title: 'SPA',
        status: 'spa',
    },
];

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        alt: 'Image Alt',
        type: 'spa'
    },
    {
        title: 'Timer',
        src: timerimg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        alt: 'Timer Image Alt',
        type: 'react'
    },
];

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
    let filteredWorks = workData;

    if (currentFilterStatus !== 'all') {
       filteredWorks = workData.filter(work => work.type === currentFilterStatus);
    }

    function changeFiltersStatus(value: TabsStatusType) {
       setCurrentFilterStatus(value);
    }

    return (
       <S.Works>
           <Container>
               <SectionTitle>My Works</SectionTitle>
               <TabMenu tabsItems={tabsItems} changeFiltersStatus={changeFiltersStatus} 
               currentFilterStatus={currentFilterStatus}/>
               <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                   {filteredWorks.map((w, index) => (
                       <Work 
                           key={index} //  ключ для каждого элемента списка
                           title={w.title}
                           src={w.src}
                           text={w.text}
                           alt={w.alt}
                       />
                   ))}
               </FlexWrapper>
           </Container>
       </S.Works>
   );
};
