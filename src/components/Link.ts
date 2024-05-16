
import { thema } from "../styles/Thema";
import styled, { css } from "styled-components";

type LinkProps = {
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
    as?: string;
    active?: boolean; // Добавляем проп active
};

export const Link = styled.a<LinkProps>`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 0;
    
    &:hover {
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
        left: 0px;
        right: 0px;
        z-index: -1;

        ${(props) =>
            props.active &&
            css`
             height: 10px ;
            `}
    }
`;
