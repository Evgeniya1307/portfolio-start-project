import React from "react";
import styled from "styled-components";


type WorkPropsType ={
    title:string
    text:string
    src: string;
    alt:string
    children?: React.ReactNode// тип children
}

type ImageProps = {
    src: string;
    alt: string;
}


//  тип для пропсов компонента ссылки
type LinkProps = {
    href: string;
    children?: React.ReactNode//тип children
}

export const Work = (props:WorkPropsType)=>{
    return(
<StyledWork>
<Image src={props.src} alt={props.alt}/>
<Title>{props.title}</Title>
<Text>{props.text}</Text>
<Link href = {'#'}>demo</Link>
<Link href ={'#'}>code</Link>
</StyledWork>
    )
}


const StyledWork = styled.div`
    background-color: #2f8d60;
    width: 40%;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img<ImageProps>`
width: 100%;
height: 260px;
object-fit:cover;
`
    
const Link = styled.a<LinkProps>`
    
`

const Title = styled.h3`
    
`

const Text = styled.p`
    
`


