
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/logo';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './mobileMenu/MobileMenu';


//для массива который передаю пропсами для menu
const Items = ['Homе','Skills','Works','Testimony','Contact']

export const Header = () => {
    return(
        <StyledHeader>
            <Container>
               <FlexWrapper justify={'space-between'} align={'center'}>
               <Logo/>
           <HeaderMenu menuItems={Items}/>
           <MobileMenu menuItems={Items}/>
                </FlexWrapper>  
           </Container>
        </StyledHeader>
    );
};

//при скроле шапка всегда в доступе
const StyledHeader=styled.header`
    background: rngba(31,31,32,8,9);
    padding: 20px 0;
    position: fixed;//scrol in place
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;//находился поверх всех эл

`