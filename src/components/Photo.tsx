import React from "react"
import styled from "styled-components"



type PhotoProps ={
    src: string;
    alt: string;
}


export const Photo =styled.img<PhotoProps>`
    src: ${props=>props.src};
`
