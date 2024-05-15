import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Style";


export const DesktopMenu: React.FC<{menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <S.DesktopMenu>
     <Menu menuItems={props.menuItems}/>
    </S.DesktopMenu>
  );
};








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
//     top: 50%;
//     span {//поднять еще 1 спан
//       display: inline-block;
//       transform: translateY(-50%);
//     }
//   }
// `
