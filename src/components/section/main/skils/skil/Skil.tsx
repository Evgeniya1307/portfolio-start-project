
import { S } from "../Skills_Style";
import { Icon } from "../../../../../layout/icon/Icon";
import { FlexWrapper } from "../../../../FlexWrapper";


type SkilPropsType = {
iconId:string
title:string
description:string
}



export const Skil = (props:SkilPropsType)=>{
    return(
<S.Skil>
    <FlexWrapper direction={"column"} align={"center"}>
    <S.IconWrapper>
    <Icon iconId={props.iconId}/>
    </S.IconWrapper>
<S.SkilTitle>{props.title}</S.SkilTitle>
<S.SkilText>{props.description}</S.SkilText>
    </FlexWrapper>
</S.Skil>
    )
}


