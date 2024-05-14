import React from "react";
import styled, { css, ThemeProps } from "styled-components";
import { thema } from "../../../styles/Thema";

type ListItemProps = {
  key: number; 
  children: React.ReactNode;
};

type LinkProps = {
  href: string;
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

type StyledMobileMenuProps = {
  isOpen: boolean;
  children?: React.ReactNode;
};

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu isOpen={true}>
      <BurgerButton isOpen={true}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={true}>
        <ul>
          {props.menuItems.map((item: string, index:number) => {
            return (
              <ListItem key={index}>
                <Link href="">
                  <span>{item}</span>
                </Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav<StyledMobileMenuProps>`
  display: none;
  
   @media ${thema.media.tablet} {
    display: block; 
  }
`

const MobileMenuPopup = styled.div<MobileMenuPopupProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  ${props => props.isOpen && css`
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

    ${props => props.isOpen && css`
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

      ${props => props.isOpen && css`
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

      ${props => props.isOpen && css`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`;

const Link = styled.a<LinkProps>`
  position: relative;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: ${thema.colors.font};
`;

const ListItem = styled.li<ListItemProps>`
  position: relative;
`;





//map пробежаться по тому массиву который передадут в пропсах 
//метод принимает стрел функ в которой каждый эл попадает в переменную он должен вернуть разметку айтома 



  {/* <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask> */}


// const Mask = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   display: inline-block;
//   height: 50%;
//   overflow-y: hidden;
//   //outline: 1px solid red;
//   color: #00ff95;

//   //cсылка на род эл
//   & + & {
//     top: 50px;
//     span {//поднять еще 1 спан
//       display: inline-block;
//       transform: translateY(-50%);
//     }
//   }
// `
