import styled from "styled-components"
import { thema } from "../../../../styles/Thema"


const Skils = styled.section`
  
` 

const Skil = styled.div`
    width: 380px;// скилы чтобы шли по 3 вряд когда их 6
    flex-grow: 1;
    padding: 62px 20px 40px;


@media ${thema.media.mobile}{
    padding: 62px 0 40px;
}
`

export const IconWrapper = styled.div`
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
text-transform: uppercase;
`


const SkilText= styled.p`
text-align: center;
`


export const S = {
    Skils,
    Skil,
    SkilText,
    SkilTitle,
    IconWrapper,


} 