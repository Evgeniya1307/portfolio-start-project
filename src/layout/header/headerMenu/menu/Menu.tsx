import React from "react"
import { S } from "../HeaderMenu_Style"





export const  Menu: React.FC<{ menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
 
    return (
        <ul>
        {props.menuItems.map((item: string, index:number) => {
          return  <S.MenuItem key={index}>
              <S.Link href="">
              <span>{item}</span>
               </S.Link>
            </S.MenuItem>
        })}
      </ul>
    )
 
}

