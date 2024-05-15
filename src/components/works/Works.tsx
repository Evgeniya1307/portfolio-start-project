
import { SectionTitle } from "../SectionTitle";
import { FlexWrapper } from "../FlexWrapper";
import { Work } from "./work/Work";
import socialImg from '../../assets/images/proj-1.png'
import timerimg from '../../assets/images/proj-2.png'
import { Container } from "../Container";
import { TabMenu } from "./tabMenu/TabMenu";
import {S} from "./Works_Styles";



const WorksItems = ['All','LANDING PAGE','REACT','SPA']

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        alt: 'Timer Image Alt'
    },

    {
        title: 'Timer',
        src: timerimg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        alt: 'Timer Image Alt'
    },

]

export const Works: React.FC = ()=>{
    return(
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={WorksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    {workData.map((w, index) => (
                        <Work 
                            key={index} // Добавьте ключ для каждого элемента списка
                            title={w.title}
                            src={w.src}
                            text={w.text}
                            alt = {w.alt}
                        />
                    ))}
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}

