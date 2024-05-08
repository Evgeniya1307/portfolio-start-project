import { constants } from "perf_hooks";
import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../layout/icon/Icon";
import { FlexWrapper } from "../../../../FlexWrapper";


type SkilPropsType = {
    iconId:string
   title:string
   description:string
}



export const Skil = (props:SkilPropsType)=>{
    return(
<StyledSkil>
    <FlexWrapper direction={"column"} align={"center"}>
    <IconWrapper>
    <Icon iconId={props.iconId}/>
    </IconWrapper>
<SkilTitle>{props.title}</SkilTitle>
<SkilText>{props.description}</SkilText>
    </FlexWrapper>
</StyledSkil>

    )
}


const StyledSkil = styled.div`
    width: 380px;// скилы чтобы шли по 3 вряд когда их 6
    padding: 62px 20px 40px;
`

const IconWrapper = styled.div`
    position: relative;

    &::before{
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translateY(-50%) translateX(-50%);

    
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left//внутри в ромбике
    }
`

const SkilTitle = styled.h3`
margin: 70px 0 15px;//в б н
font-family: 'Josefin Sans', sans-serif;
font-weight: 700;
font-size: 16px;
letter-spacing: 1px;
text-transform: uppercase;
`


const SkilText= styled.p`
text-align: center;
font-weight: 400;
font-size: 14px;
line-height: 1.4;
`