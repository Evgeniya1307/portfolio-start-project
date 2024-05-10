import React from "react";
import styled from "styled-components";
import { Link } from "../../Link";

type ListItemProps = {
    key: number;
    children: React.ReactNode;
};


type LinkProps = {
    href: string; // Добавляем свойство href в тип LinkProps
    children: React.ReactNode;
};

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
   margin-bottom: 40px;
   ul {
       display: flex;
       gap: 20px;
       justify-content: center;
    }
`;

const ListItem = styled.li<ListItemProps>`
    
`




//map пробежаться по тому массиву который передадут в пропсах 
//метод принимает стрел функ в которой каждый эл попадает в переменную он должен вернуть разметку айтома 