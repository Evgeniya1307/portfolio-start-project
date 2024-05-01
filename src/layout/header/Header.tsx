
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/logo';
import { Menu } from '../../components/logo/menu/Menu';


export const Header = () => {
    return(
        <StyledHeader>
           <Logo/>
           <Menu/>
        </StyledHeader>
    );
};

const StyledHeader=styled.header`
    background-color: #6e9b6d;
`
