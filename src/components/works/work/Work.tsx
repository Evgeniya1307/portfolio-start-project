import React from "react";
import { Link } from "../../Link";
import { S } from "../Works_Styles";
import { Button } from "../../Button";

type WorkPropsType ={
    title:string
    text:string
    src: string;
    alt:string
    children?: React.ReactNode// тип children
}


export const Work: React.FC<WorkPropsType> = (props:WorkPropsType)=>{
    return(
<S.Work>
    <S.ImageWrapper>
        <S.Image src={props.src} alt={props.alt}/>
    <Button type="button">view project</Button>
    </S.ImageWrapper>

<S.Description>
    <S.Title>{props.title}</S.Title>
<S.Text>{props.text}</S.Text>
<Link active href = {'#'}>demo</Link>
<Link href ={'#'}>code</Link>
</S.Description>

</S.Work>
    )
}


