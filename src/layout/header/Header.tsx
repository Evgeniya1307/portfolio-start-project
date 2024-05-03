
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/logo';
import { Menu } from '../../components/logo/menu/Menu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';


//для массива который передаю пропсами для menu
const Items = ['Home','Skills','Works','Testimony','Contact']

export const Header = () => {
    return(
        <StyledHeader>
            <Container>
               <FlexWrapper justify={'space-between'} align={'center'}>
               <Logo/>
           <Menu menuItems={Items}/>
                </FlexWrapper>  
           </Container>
        </StyledHeader>
    );
};

const StyledHeader=styled.header`
    background-color: #6e9b6d;
`
