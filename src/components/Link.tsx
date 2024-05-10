import { thema } from "../styles/Thema"
import styled from "styled-components"


type LinkProps = {
    href: string; // Добавляем свойство href в тип LinkProps
    children: React.ReactNode;
};


export const Link = styled.a<LinkProps>`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 0;
    
&:hover { //при наведии на линки в ворке
&::before {
height: 10px;
}
    }

    &::before {
       content: "";
       display: inline-block;
       background-color: ${thema.colors.accent};
       
    
    position: absolute;
    bottom: 5px;
    left:   0px;
    right:  0px;
    z-index: -1;
    }

`