import React from "react";
import styled from "styled-components";
import { thema } from "../../../styles/Thema";

type ListItemProps = {
  key: number;
  children: React.ReactNode;
};


type LinkProps = {
  href: string; // Добавляем свойство href в тип LinkProps
  children: React.ReactNode;
};

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item: string, index:number) => {
          return  <ListItem key={index}>
              <Link href="">
                {item}
                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Link>
            </ListItem>
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

const Link = styled.a<LinkProps>`
  position: relative;
  
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: #00ff95;

  //cсылка на род эл
  & + & {
    top: 50px;
    span {//поднять еще 1 спан
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li<ListItemProps>`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${thema.colors.accent};
    
    position: absolute;
    top:     50%;
    left:   -10px;
    right:  -10px;
    z-index: 1;
    transform: scale(0);
  }

  &:hover {
     &::before {
      transform: scale(1);
    } 
  ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${thema.colors.font};
      
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`









//map пробежаться по тому массиву который передадут в пропсах 
//метод принимает стрел функ в которой каждый эл попадает в переменную он должен вернуть разметку айтома 