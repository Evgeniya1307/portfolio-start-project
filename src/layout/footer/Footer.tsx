import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { thema } from "../../styles/Thema";






export const Footer =() => {
    return(
<StyledFooter>
    <FlexWrapper direction={'column'} align={'center'}>
            <Name>Evgeniya</Name>
            <SocialList>
                <SocialItem>
                <SocialLink>
            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
            </SocialLink>
                </SocialItem> 
                <SocialItem>
                <SocialLink>
            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'}iconId={'telegram'}/>
            </SocialLink>
            </SocialItem> 
            <SocialItem>
                <SocialLink>
            <Icon height={'21px'}width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkidin'}/>
            </SocialLink>
                </SocialItem>
        </SocialList>
        <Copyright>© 2024 Evgeniya Staravoitava, All Rights Reserved</Copyright>
        </FlexWrapper> 
        </StyledFooter>
    )
}


// компоненты, используемые внутри Footer 
const StyledFooter = styled.footer`
background-color:${thema.colors.primaryBg};

padding: 40px 0 ;
`
const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-weight: 700;
font-size: 22px;
letter-spacing: 3px;

`;
const SocialList = styled.ul`
display: flex;
gap: 20px ; 
margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
background-color: rgba(255, 255, 255, 0.1);
border-radius: 50%;
width: 35px;
height: 35px;

display: flex;
justify-content: center;
align-items:center;

color: ${thema.colors.accent};

//при наведении на ссылку цвет меняется
&:hover {
    color: ${thema.colors.primaryBg};

transform: translateY(-4px);
}
`;
const Copyright = styled.small`
font-weight: 400;
font-size: 12px;
text-align: center;
opacity: 0.5;
`;