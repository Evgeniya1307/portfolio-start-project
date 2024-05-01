import { constants } from "perf_hooks";
import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../../layout/header/icon/Icon";


type SkilPropsType = {
    iconId:string
   title:string
   description:string
}



export const Skil = (props:SkilPropsType)=>{
    return(
<StyledSkil>
<Icon iconId={props.iconId}/>

<SkilTitle>{props.title}</SkilTitle>
<SkilText>{props.description}</SkilText>
</StyledSkil>

    )
}


const StyledSkil = styled.div`
    width: 33%;// скилы чтобы шли по 3 вряд когда их 6
background-color: #f8f8f080;
`


const SkilTitle = styled.h3`
    
`


const SkilText= styled.p`
    
`