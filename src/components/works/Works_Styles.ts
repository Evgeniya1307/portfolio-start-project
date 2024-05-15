import styled from "styled-components"
import { thema } from "../../styles/Thema"
import { Link } from "../Link"
import { Button } from "../Button"
import { FlexWrapper } from "../FlexWrapper"


type ImageProps = {
    src: string;
    alt: string;
}


const Works = styled.section`
    ${FlexWrapper}{
        gap:30px;
    }
`


const Work = styled.div`
    background-color: ${thema.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link}{
        padding: 10px 0;

        & + ${Link} {
           margin-left: 20px;
        }
    }

    @media ${thema.media.desktop} {
        max-width: 540px;
    }
`

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);

    &::before{
        width: 100%;
        height: 100%;
    }
}

&::before{//псевдоэлемент
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3); //  rgba для прозрачности
        backdrop-filter: blur(4px); // Размытие
        opacity: 0;//скрываю
    }


&:hover {
    &::before{
        opacity: 1;
    }
  
    ${Button} {
    opacity: 1;
}
}

@media ${thema.media.tablet}{
    &::before{
        opacity: 1;
    }
  
    ${Button} {
    opacity: 1;
}
}


    
`

const Image = styled.img<ImageProps>`
width: 100%;
height: 260px;
object-fit:cover;
`

const Description =styled.div`
    padding: 25px 20px;// вверх по бокам
`

const Title = styled.h3`
    
`

const Text = styled.p`
    margin: 14px 0 10px ;
`



export const S ={
    Work,
    Works,
    ImageWrapper,
    Text,
    Title,
    Description,
    Image,



}
