import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";






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
background-color:#234320;
min-height: 30vh;
`
const Name = styled.span``;
const SocialList = styled.ul`
display: flex;
gap: 30px ;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a``;
const Copyright = styled.small``;


