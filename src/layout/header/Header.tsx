
import React from 'react';
import { Logo } from '../../components/logo/logo';
import { DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { S } from './Header_Styles';

//для массива который передаю пропсами для menu
const Items = ['Homе','Skills','Works','Testimony','Contact']

export const Header: React.FC = () => {
   // логикa для адаптива
   const [width, setWidth] = React.useState(window.innerWidth);
   const breakpoint = 768;
   
//слежу за изменением шириной окна браузера
React.useEffect(()=>{
    const handeWindowResize = () => setWidth(window.innerWidth)
    return () => window.removeEventListener('resize', handeWindowResize);
}, []);


    return(
       <S.Header>
            <Container>
               <FlexWrapper justify={'space-between'} align={'center'}>
               <Logo/>
{width < breakpoint ? <MobileMenu menuItems={Items}/>
                    : <DesktopMenu menuItems={Items}/>}  
                </FlexWrapper>  
           </Container>
           </S.Header>
    );
};

