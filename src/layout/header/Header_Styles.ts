import styled from "styled-components"





//при скроле шапка всегда в доступе
const Header=styled.header`
    background: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed;//scrol in place
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;//находился поверх всех эл

`


export const S = {
    Header
}