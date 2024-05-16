import React from "react";
import styled from "styled-components";
import { Link } from "../../Link"; // Добавляем LinkProps для корректной типизации Link

type ListItemProps = {
    children: React.ReactNode;
};

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

type TabMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>
    changeFiltersStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
};

const ListItem: React.FC<ListItemProps> = ({ children }) => {
    return <StyledListItem>{children}</StyledListItem>;
};

const TabMenu: React.FC<TabMenuPropsType> = (props) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as="button" onClick={() => props.changeFiltersStatus(item.status)}>{item.title}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 1px solid red;
        margin: 0 auto 40px;
    }
`;

const StyledListItem = styled.li``;

export default TabMenu;


//map пробежаться по тому массиву который передадут в пропсах 
//метод принимает стрел функ в которой каждый эл попадает в переменную он должен вернуть разметку айтома 