import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Style";

export const MobileMenu: React.FC<{ menuItems: Array<string>; isOpen?: boolean }> = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  const onBurgerBtnClick = () => {
    setMenuIsOpen(MenuIsOpen => !MenuIsOpen);
  };

  return (
    <S.MobileMenu isOpen={menuIsOpen}>
      <S.BurgerButton isOpen={menuIsOpen}>
        <button onClick={onBurgerBtnClick}>
          <span></span>
        </button>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};







 