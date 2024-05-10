import React from "react";
import styled from "styled-components";
import { thema } from "../styles/Thema";



type ButtonProps = {
    type: "submit" | "button" | "reset";
    children?: React.ReactNode; // children необязательный
}

export const Button = styled.button<ButtonProps>`
     font-weight: 400;
     font-size: 14px;
     letter-spacing: 1px;
     text-transform:uppercase;
     width: 170px;
     height: 32px;
     position: relative;
     z-index: 0;

&:hover{
    &::before{
        height: 100%;
    width:  100%;
    }
}


    &::before {//line
    content: "";
    display:inline-block;
    height: 10px;
    width:  50%;
    background-color: ${thema.colors.accent};

position: absolute;
bottom: 0;
left: 50%;
z-index: -1;
transform: translateX(-50%)
}
`





//007bff but 
//tekst d622b5