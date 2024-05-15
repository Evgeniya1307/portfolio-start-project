import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Style";



export const MobileMenu: React.FC <{menuItems: Array<string>}> = (props:{menuItems:Array<string>})  => {
  return (
    <S.MobileMenu isOpen={true}>
      <S.BurgerButton isOpen={true}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};





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
