
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/logo';
import { Menu } from '../../components/logo/menu/Menu';


//для массива который передаю пропсами для menu
const Items = ['Home','Skills','Works','Testimony','Contact']

export const Header = () => {
    return(
        <StyledHeader>
           <Logo/>
           <Menu menuItems={Items}/>
        </StyledHeader>
    );
};

const StyledHeader=styled.header`
    background-color: #6e9b6d;
    display: flex;
    justify-content: space-between;
`
