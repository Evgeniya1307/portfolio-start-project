import styled from "styled-components"
import { thema } from "../../styles/Thema"


const Slider = styled.div`
    max-width:500px;
    display: flex;
    flex-direction:column;
    align-items: center;

  
`

const Slade = styled.div`
    text-align: center;
`

const Text = styled.p`
  
`

const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`

const Pagination = styled.div`
    span{
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 20px;
    
    //для всех спан что идут после спана
    & +span{
        margin-left: 5px;
    }

    &.active{//span с классом active
background-color: ${thema.colors.accent}
    }
    }
`



export const S = {
    Slider,
    Pagination,
    Name,
    Text,
    Slade
}