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
              <span>{item}</span>
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

  @media ${thema.media.tablet} {
    //на экранах меньше 768 hedar не показываю
    display: none;
  }
`

const Link = styled.a<LinkProps>`
  position: relative;
  
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: ${thema.colors.font}
`



const ListItem = styled.li<ListItemProps>`
  position: relative;

  
`




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
