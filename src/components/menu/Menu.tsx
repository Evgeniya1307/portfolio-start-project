import React from "react";
import styled from "styled-components";


export const Menu = (props:{menuItems:Array<string>}) => {
    return (
        <StyledMenu>
            <ul>

{props.menuItems.map((item:string,index:number)=>{
    return<li key={index}>
        <a href="">{item}</a>
    </li>
})}
</ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
       display: flex;
       gap: 30px;
       justify-content: center;
    }
`;








//map пробежаться по тому массиву который передадут в пропсах 
//метод принимает стрел функ в которой каждый эл попадает в переменную он должен вернуть разметку айтома 