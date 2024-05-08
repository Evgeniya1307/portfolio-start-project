import styled from "styled-components"
import { thema } from "../styles/Thema"




export const SectionTitle=styled.h2`
 text-align: center;
 font-family: Josefin Sans, sans-serif;
 font-weight: 600;
 font-size: 36px;
 letter-spacing: 5px;
 position: relative;


//line
&::before{
    content: '';
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${thema.colors.accent};
    
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translate(-50%);
}

`