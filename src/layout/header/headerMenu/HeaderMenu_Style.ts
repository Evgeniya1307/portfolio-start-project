import React from "react";
import styled, {css} from "styled-components";
import { thema } from "../../../styles/Thema";

type MenuItemProps = {
    key: number;
    children: React.ReactNode;
  };
  
  
  type LinkProps = {
    href: string; // Добавляем свойство href в тип LinkProps
    children: React.ReactNode;
  };

  type BurgerButtonProps = {
    isOpen?: boolean;
    children?: React.ReactNode;
  };
  
  type MobileMenuPopupProps = {
    isOpen: boolean;
    children?: React.ReactNode;
  };
  
  type MobileMenuProps = {
    isOpen: boolean;
    children?: React.ReactNode;
  };


//Menu
const Link = styled.a<LinkProps>`
  position: relative;
  
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: ${thema.colors.font}
`

const MenuItem = styled.li<MenuItemProps>`
  position: relative;

  
`
//стили с компоненты mobilemenu
const MobileMenu = styled.nav<MobileMenuProps>`
  
`;

const MobileMenuPopup = styled.div<MobileMenuPopupProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const BurgerButton = styled.button<BurgerButtonProps>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${thema.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${thema.colors.font};
      position: absolute;
      transform: translate(-10px);

      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${thema.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;


//DESKTOPMENU
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`


export const S = {
    Link,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}