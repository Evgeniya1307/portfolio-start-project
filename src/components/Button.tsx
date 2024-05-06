import React from "react";
import styled from "styled-components";



type ButtonProps = {
    type: "submit" | "button" | "reset";
    children?: React.ReactNode; // children необязательный
}

export const Button = styled.button<ButtonProps>`
     padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;

`

//007bff but 
//tekst d622b5