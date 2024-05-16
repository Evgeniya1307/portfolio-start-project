

import { FlexWrapper } from "../../../FlexWrapper";
import { SectionTitle } from "../../../SectionTitle";
import { Skil } from "./skil/Skil";
import { Container } from "../../../Container";
import { S } from "./Skills_Style";

const skillData = [
   {
      iconId: 'codeSvg',
      title: 'HTML5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },

   {
      iconId: 'css',
      title: 'CSS3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },

   {
      iconId: 'react',
      title: 'REACT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },

   {
      iconId: 'styled',
      title: 'STYLED COMPONENTS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },

   {
      iconId: 'typescript',
      title: 'TYPESCRIPT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },

   {
      iconId: 'web',
      title: 'WEB DESIGN',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
   },
]

export const Skils =()=>{
    return(
<S.Skils>
<Container>
<SectionTitle>My Skills</SectionTitle>
<FlexWrapper wrap={'wrap'} justify={'space-between'}>


{skillData.map((s, index) => (
            <Skil key={index} iconId={s.iconId} 
            title={s.title} 
            description={s.description} />
))}
    </FlexWrapper>
</Container>
    </S.Skils>

    );
};




